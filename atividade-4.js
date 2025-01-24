function calculatePercentages(revenueByState) {
    const totalRevenue = Object.values(revenueByState).reduce((total, value) => total + value, 0);

    const percentages = {};
    for (const [state, revenue] of Object.entries(revenueByState)) {
        percentages[state] = ((revenue / totalRevenue) * 100).toFixed(2);
    }

    return percentages;
}

// Monthly revenue by state
const monthlyRevenue = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Others: 19849.53
};

// Calculate and display percentages
const percentages = calculatePercentages(monthlyRevenue);
for (const [state, percentage] of Object.entries(percentages)) {
    console.log(`${state}: ${percentage}%`);
}
