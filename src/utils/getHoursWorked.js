export async function getHoursWorked() {
  try {
    const getHours = await fetch('https://wakatime.com/share/@5f909d8e-c394-4061-9f24-fcf5f1d08fa9/cbe350a2-eeb0-4024-9f5b-580483e37334.json')

    if (!getHours.ok) {
      throw new Error(`WakaTime error: ${hours.status}`);
    }

    const res = await getHours.json();
    console.log(res.data.grand_total)

    return res.data.grand_total;

  } catch (error) {
    console.log('Something went wrong:', error);
  }
}