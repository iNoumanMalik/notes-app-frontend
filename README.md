# Notes App - Frontend

A modern, responsive React frontend for a notes management application with dark theme UI and real-time updates.

## Features

- **User Authentication**: Login and registration system
- **Notes Management**: Create, edit, delete, and view notes
- **Dark Theme**: Beautiful dark UI with gradient backgrounds
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Updates**: Instant UI updates after operations
- **Loading States**: Visual feedback during API operations
- **Error Handling**: User-friendly error messages
- **Auto-save**: Automatic token persistence

## Tech Stack

- **React 19**: Modern React with hooks
- **React Router**: Client-side routing
- **Axios**: HTTP client for API requests
- **Vite**: Fast build tool and dev server
- **CSS3**: Custom styling with gradients and animations

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- Backend server running on `http://localhost:8000`

## Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── NoteCard.jsx     # Individual note display
│   │   └── NoteEditor.jsx   # Note creation/editing form
│   ├── pages/
│   │   ├── Login.jsx        # Login page
│   │   ├── Register.jsx     # Registration page
│   │   └── Notes.jsx        # Main notes dashboard
│   ├── App.jsx              # Main app component
│   ├── App.css              # App-specific styles
│   ├── index.css            # Global styles
│   ├── api.js               # Axios configuration
│   └── main.jsx             # App entry point
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Features Overview

### Authentication
- Secure login and registration
- JWT token management
- Automatic token refresh
- Protected routes

### Notes Management
- Create new notes with title and content
- Edit existing notes inline
- Delete notes with confirmation
- Real-time UI updates
- Loading states for all operations

### UI/UX
- Dark theme with gradient backgrounds
- Responsive grid layout for notes
- Smooth animations and transitions
- Loading indicators
- Error message display
- Mobile-friendly design

## API Integration

 The frontend communicates with the backend API at `http://localhost:8000/api`:

- Authentication endpoints for login/register
- CRUD operations for notes
- JWT token-based authentication
- 10-second request timeout
- Comprehensive error handling

## Styling

- **Dark Theme**: Black background with gray gradients
- **Modern UI**: Rounded corners, shadows, and gradients
- **Responsive**: CSS Grid and Flexbox layouts
- **Animations**: Smooth hover effects and transitions
- **Typography**: Gradient text effects for headings

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

### Hot Reload
The development server supports hot module replacement for instant updates during development.

### Code Quality
- ESLint configuration for code quality
- React hooks best practices
- Modern JavaScript (ES6+)

### State Management
- React hooks for local state
- Context-free architecture
- Efficient re-rendering

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist/` folder contains the production build

3. Deploy to your preferred hosting service (Netlify, Vercel, etc.)

## Environment Configuration

The API base URL is configured in `src/api.js`. Update it for different environments:

```javascript
const api = axios.create({
    baseURL: 'http://localhost:8000/api', // Change for production
    timeout: 10000
})
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## License

ISC License
