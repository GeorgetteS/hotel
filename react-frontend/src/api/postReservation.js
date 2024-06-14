export const fetchReservation = async (reservation) => {
  try {
    const response = await fetch('https://63f2529daab7d09125065aa9.mockapi.io/reservations', {
      body: JSON.stringify(reservation),
      method: 'POST',
    });

    if (!response.ok) {
      throw new Error('Беда!');
    }
    const data = await response.json();

    return data;
  } catch (error) {
    // return rejectWithValue(error.message);
    console.log(error);
  }
};
