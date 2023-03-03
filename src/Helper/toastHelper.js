import { toast } from 'react-hot-toast'

export const showSuccess = (message, duration = 5000) => toast.success(message, { duration })

export const showError = (message, duration = 5000) => toast.error(message, { duration })