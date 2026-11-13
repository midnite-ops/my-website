export async function getHoursWorked() {
  try {
    const credentials = btoa(`${import.meta.env.VITE_WAKAAPI}:`);
    console.log('sendong')
    const hours = await fetch(
      'https://wakatime.com/api/v1/users/current/all_time_since_today',
      {
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      }
    );

    if (!hours.ok) {
      throw new Error(`WakaTime error: ${hours.status}`);
    }

    const res = await hours.json();

    return res.data;

  } catch (error) {
    console.log('Something went wrong:', error);
  }
}