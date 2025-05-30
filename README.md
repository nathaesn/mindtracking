  # MindTrack - Mental Health & Productivity Tracking Application

MindTrack is a modern web application designed to help users manage their mental health, track productivity, and maintain a balanced lifestyle. The application features a comprehensive dashboard system with role-based access control, allowing both users and administrators to manage their tasks, notes, and mood entries effectively.

## 🌟 Features

### Authentication System
- Secure login and registration
- Role-based access control (Admin and User roles)
- Password reset functionality
- Remember me option
- Social login integration (Google, Facebook - UI ready)
- Protected routes
- JWT token management

### User Dashboard
- **Task Management**
  - Create, read, update, and delete tasks
  - Task prioritization (low, medium, high)
  - Task status tracking (pending, in progress, completed)
  - Due date management
  - Task assignment

- **Note Taking**
  - Create and manage notes
  - Tag system for organization
  - Rich text content
  - Search and filter capabilities

- **Mood Tracking**
  - Daily mood logging
  - Activity tracking
  - Mood history visualization
  - Notes for mood entries

### Admin Dashboard
- **User Management**
  - User CRUD operations
  - Role management
  - User status monitoring
  - Activity tracking

- **System Monitoring**
  - System health metrics
  - Resource usage tracking
  - Performance monitoring
  - Security logs

### UI/UX Features
- Responsive design
- Dark mode support
- Modern and clean interface
- Loading states and animations
- Toast notifications
- Form validation
- Error handling

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Modern web browser

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mindtrack.git
cd mindtrack
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Test Accounts

#### Admin Account
- Email: admin@system.com
- Password: Admin@123
- Access: Full system access including admin dashboard

#### User Account
- Email: user@system.com
- Password: User@123
- Access: Standard user features and dashboard

## 🛠️ Tech Stack

- **Frontend Framework**: React with TypeScript
- **Routing**: React Router
- **State Management**: React Context API
- **Form Handling**: React Hook Form with Zod validation
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Authentication**: JWT (JSON Web Tokens)

## 📁 Project Structure

```
src/
├── components/
│   ├── auth/           # Authentication components
│   ├── dashboard/      # Dashboard components
│   └── ...            # Other UI components
├── context/           # React context providers
├── types/             # TypeScript type definitions
├── validation/        # Form validation schemas
└── App.tsx           # Main application component
```

## 🔒 Security Features

- JWT-based authentication
- Protected routes
- Role-based access control
- Form validation
- Secure password handling
- CSRF protection (to be implemented)
- Session management

## 🎨 UI Components

The application uses a consistent design system with:
- Responsive layouts
- Dark mode support
- Accessible components
- Loading states
- Error handling
- Toast notifications
- Form validation feedback

## 📝 API Integration

The current version uses mock data for demonstration. API integration points are prepared for:
- User authentication
- Task management
- Note management
- Mood tracking
- System monitoring
- User management

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- All contributors and users of the application

## 📞 Support

For support, please open an issue in the GitHub repository or contact the development team.

---

Made with ❤️ by [Andika Natha]
