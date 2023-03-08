export default defineEventHandler(async (event) => {
    const GET_PARAMS = getQuery(event);
    // const POST_PARAMS = await readBody(event);

    const { apiKey } = useRuntimeConfig();
    const URI = `https://api.apilayer.com/exchangerates_data/latest?base=USD&symbols=EUR,GBP`;

    const response = await $fetch(URI, {
        headers: {
            apiKey
        }
    });

    return response;
});