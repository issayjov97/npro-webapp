export const LOGIN = 'LOGIN';

export const login = (email, password) => {
    return async dispatch => {
      const response = await fetch(
        'http://localhost:8080/api/auth',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            password: password
            })
        }
      );
  
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
  
      const resData = await response.json();
      console.log(resData);
      dispatch({ type: LOGIN });
    };
  };
