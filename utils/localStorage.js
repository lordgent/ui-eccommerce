export const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state); 
    localStorage.setItem('cart', serializedState); 
  } catch (error) {
    console.error('Error saving state to localStorage:', error); 
  }
};
  
export const loadStateFromLocalStorage = () => {
  if (typeof window !== 'undefined') {  
    try {
      const serializedState = localStorage.getItem('cart'); 
      if (serializedState === null) return undefined;  
      return JSON.parse(serializedState);  
    } catch (error) {
      console.error("Could not load state from localStorage", error); 
      return undefined;
    }
  }
  return undefined;  
};
