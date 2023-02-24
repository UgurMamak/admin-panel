export const baseURL = 'http://localhost:3004';

export const widgetURL = {
  fetchWidgetSchema: `${baseURL}/widget_schema`,
  addEmployee: `${baseURL}/employees`,
  updateEmployee: `${baseURL}/employees/`,
  deleteEmployee: `${baseURL}/employees/`,
  fetchEmployeeById: `${baseURL}/employees/`,
};

// json-server --watch db.json --port 3004
