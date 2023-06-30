
const	getData = async(url) =>
{
	try
	{
		const response = await fetch(url);
		const jsonData = await response.json();
		return (jsonData);
	}
	catch(error)
	{
		console.log(error.message);
	}
}

export default getData;