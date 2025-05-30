export interface User {
  id: string;
  fullName: string;
  email: string;
  role: 'admin' | 'user';
  createdAt: string;
  lastLogin: string;
  status: 'active' | 'inactive';
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  assignedTo: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  tags: string[];
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface MoodEntry {
  id: string;
  userId: string;
  mood: 'very_happy' | 'happy' | 'neutral' | 'sad' | 'very_sad';
  note: string;
  activities: string[];
  createdAt: string;
}

export interface Analytics {
  totalTasks: number;
  completedTasks: number;
  pendingTasks: number;
  moodTrends: {
    date: string;
    averageMood: number;
  }[];
  productivityScore: number;
  weeklyProgress: {
    date: string;
    completedTasks: number;
    totalTasks: number;
  }[];
}

export interface DashboardStats {
  userStats: {
    totalTasks: number;
    completedTasks: number;
    pendingTasks: number;
    moodAverage: number;
    productivityScore: number;
  };
  adminStats: {
    totalUsers: number;
    activeUsers: number;
    totalTasks: number;
    completedTasks: number;
    systemHealth: {
      cpu: number;
      memory: number;
      storage: number;
    };
  };
}

export type TaskFormData = Omit<Task, 'id' | 'createdAt' | 'updatedAt' | 'createdBy'>;
export type NoteFormData = Omit<Note, 'id' | 'createdAt' | 'updatedAt' | 'userId'>;
export type MoodEntryFormData = Omit<MoodEntry, 'id' | 'createdAt' | 'userId'>; 