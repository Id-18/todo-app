export interface Task {
  _id?: string;
  assignedTo: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
  dueDate: string;
  priority: 'Low' | 'Normal' | 'High';
  comments: string;
}