import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Task, Note, MoodEntry, DashboardStats, TaskFormData, NoteFormData, MoodEntryFormData } from '../../types/dashboard';
import { Plus, Edit, Trash, Check, Clock, AlertTriangle, Calendar, Tag, Activity } from 'lucide-react';
import { toast } from 'react-hot-toast';

// Mock data - Replace with actual API calls
const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Complete Project Proposal',
    description: 'Write and submit the project proposal document',
    status: 'in_progress',
    priority: 'high',
    dueDate: '2024-03-20',
    assignedTo: 'user1',
    createdBy: 'admin1',
    createdAt: '2024-03-15',
    updatedAt: '2024-03-15',
  },
  // Add more mock tasks...
];

const mockNotes: Note[] = [
  {
    id: '1',
    title: 'Meeting Notes',
    content: 'Discussion points from team meeting',
    tags: ['meeting', 'team'],
    userId: 'user1',
    createdAt: '2024-03-15',
    updatedAt: '2024-03-15',
  },
  // Add more mock notes...
];

const mockMoodEntries: MoodEntry[] = [
  {
    id: '1',
    userId: 'user1',
    mood: 'happy',
    note: 'Productive day at work',
    activities: ['work', 'exercise'],
    createdAt: '2024-03-15',
  },
  // Add more mock mood entries...
];

const UserDashboard: React.FC = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'tasks' | 'notes' | 'mood'>('overview');
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [notes, setNotes] = useState<Note[]>(mockNotes);
  const [moodEntries, setMoodEntries] = useState<MoodEntry[]>(mockMoodEntries);
  const [stats, setStats] = useState<DashboardStats['userStats']>({
    totalTasks: 10,
    completedTasks: 4,
    pendingTasks: 6,
    moodAverage: 3.5,
    productivityScore: 75,
  });
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
  const [isMoodModalOpen, setIsMoodModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Task | Note | MoodEntry | null>(null);

  // CRUD Operations for Tasks
  const handleCreateTask = (taskData: TaskFormData) => {
    const newTask: Task = {
      ...taskData,
      id: Date.now().toString(),
      createdBy: user?.id || '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setTasks([...tasks, newTask]);
    toast.success('Task created successfully');
    setIsTaskModalOpen(false);
  };

  const handleUpdateTask = (taskId: string, taskData: Partial<TaskFormData>) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, ...taskData, updatedAt: new Date().toISOString() }
        : task
    ));
    toast.success('Task updated successfully');
    setEditingItem(null);
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    toast.success('Task deleted successfully');
  };

  // CRUD Operations for Notes
  const handleCreateNote = (noteData: NoteFormData) => {
    const newNote: Note = {
      ...noteData,
      id: Date.now().toString(),
      userId: user?.id || '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setNotes([...notes, newNote]);
    toast.success('Note created successfully');
    setIsNoteModalOpen(false);
  };

  const handleUpdateNote = (noteId: string, noteData: Partial<NoteFormData>) => {
    setNotes(notes.map(note =>
      note.id === noteId
        ? { ...note, ...noteData, updatedAt: new Date().toISOString() }
        : note
    ));
    toast.success('Note updated successfully');
    setEditingItem(null);
  };

  const handleDeleteNote = (noteId: string) => {
    setNotes(notes.filter(note => note.id !== noteId));
    toast.success('Note deleted successfully');
  };

  // CRUD Operations for Mood Entries
  const handleCreateMoodEntry = (moodData: MoodEntryFormData) => {
    const newMoodEntry: MoodEntry = {
      ...moodData,
      id: Date.now().toString(),
      userId: user?.id || '',
      createdAt: new Date().toISOString(),
    };
    setMoodEntries([...moodEntries, newMoodEntry]);
    toast.success('Mood entry created successfully');
    setIsMoodModalOpen(false);
  };

  const handleUpdateMoodEntry = (entryId: string, moodData: Partial<MoodEntryFormData>) => {
    setMoodEntries(moodEntries.map(entry =>
      entry.id === entryId
        ? { ...entry, ...moodData }
        : entry
    ));
    toast.success('Mood entry updated successfully');
    setEditingItem(null);
  };

  const handleDeleteMoodEntry = (entryId: string) => {
    setMoodEntries(moodEntries.filter(entry => entry.id !== entryId));
    toast.success('Mood entry deleted successfully');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome back, {user?.fullName}!
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Here's an overview of your progress and activities
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-8">
          <nav className="-mb-px flex space-x-8">
            {['overview', 'tasks', 'notes', 'mood'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`${
                  activeTab === tab
                    ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 gap-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Stats Cards */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900">
                    <Activity className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Productivity Score</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stats.productivityScore}%</p>
                  </div>
                </div>
              </div>
              {/* Add more stat cards... */}
            </div>
          )}

          {/* Tasks Tab */}
          {activeTab === 'tasks' && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white">Tasks</h2>
                  <button
                    onClick={() => setIsTaskModalOpen(true)}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <Plus className="h-5 w-5 mr-2" />
                    New Task
                  </button>
                </div>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {tasks.map((task) => (
                  <div key={task.id} className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={task.status === 'completed'}
                          onChange={() => handleUpdateTask(task.id, { status: task.status === 'completed' ? 'pending' : 'completed' })}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <div className="ml-4">
                          <h3 className="text-lg font-medium text-gray-900 dark:text-white">{task.title}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{task.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          task.priority === 'high' ? 'bg-red-100 text-red-800' :
                          task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {task.priority}
                        </span>
                        <button
                          onClick={() => setEditingItem(task)}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <Edit className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteTask(task.id)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <Trash className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notes Tab */}
          {activeTab === 'notes' && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white">Notes</h2>
                  <button
                    onClick={() => setIsNoteModalOpen(true)}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <Plus className="h-5 w-5 mr-2" />
                    New Note
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {notes.map((note) => (
                  <div key={note.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">{note.title}</h3>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setEditingItem(note)}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <Edit className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteNote(note.id)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <Trash className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{note.content}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {note.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mood Tab */}
          {activeTab === 'mood' && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white">Mood Tracker</h2>
                  <button
                    onClick={() => setIsMoodModalOpen(true)}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <Plus className="h-5 w-5 mr-2" />
                    Log Mood
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {moodEntries.map((entry) => (
                    <div key={entry.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center">
                          <span className={`h-8 w-8 rounded-full flex items-center justify-center ${
                            entry.mood === 'very_happy' ? 'bg-green-100 text-green-800' :
                            entry.mood === 'happy' ? 'bg-green-50 text-green-600' :
                            entry.mood === 'neutral' ? 'bg-yellow-100 text-yellow-800' :
                            entry.mood === 'sad' ? 'bg-orange-100 text-orange-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {entry.mood === 'very_happy' ? '😄' :
                             entry.mood === 'happy' ? '🙂' :
                             entry.mood === 'neutral' ? '😐' :
                             entry.mood === 'sad' ? '😔' :
                             '😢'}
                          </span>
                          <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white capitalize">
                            {entry.mood.replace('_', ' ')}
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setEditingItem(entry)}
                            className="text-gray-400 hover:text-gray-500"
                          >
                            <Edit className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleDeleteMoodEntry(entry.id)}
                            className="text-gray-400 hover:text-red-500"
                          >
                            <Trash className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{entry.note}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {entry.activities.map((activity) => (
                          <span
                            key={activity}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                      <p className="mt-4 text-xs text-gray-400">
                        {new Date(entry.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modals for Create/Edit operations will be added here */}
    </div>
  );
};

export default UserDashboard; 