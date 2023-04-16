type IType = 'info' | 'success' | 'warning' | 'error' | 'default'

export function toastProps(type: IType, render: string) {
  return {
    render,
    type,
    isLoading: false,
    autoClose: 4000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    closeButton: true
  }
}
