import { useState, useEffect } from 'react';
import { employeesService } from '../services/firebaseService';

export const useEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      setLoading(true);
      setError(null);
      const employeesData = await employeesService.getAll();
      setEmployees(employeesData);
    } catch (err) {
      console.error('Erro ao carregar funcionários:', err);
      setError('Erro ao carregar funcionários. Usando dados de demonstração.');
      // Dados de demonstração em caso de erro
      setEmployees([]);
    } finally {
      setLoading(false);
    }
  };

  const getEmployeesByFunction = (functionType) => {
    return employees.filter(employee => employee.function === functionType);
  };

  const addEmployee = async (employeeData) => {
    try {
      const id = await employeesService.add(employeeData);
      await loadEmployees(); // Recarregar lista
      return id;
    } catch (error) {
      console.error('Erro ao adicionar funcionário:', error);
      throw error;
    }
  };

  const updateEmployee = async (id, employeeData) => {
    try {
      await employeesService.update(id, employeeData);
      await loadEmployees(); // Recarregar lista
    } catch (error) {
      console.error('Erro ao atualizar funcionário:', error);
      throw error;
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await employeesService.delete(id);
      await loadEmployees(); // Recarregar lista
    } catch (error) {
      console.error('Erro ao remover funcionário:', error);
      throw error;
    }
  };

  return {
    employees,
    loading,
    error,
    getEmployeesByFunction,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    reload: loadEmployees
  };
};

