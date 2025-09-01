const student = {
    name: "Doug",
    GPA: 3.5,
    classes: [100, 200]
};
// console.log(student.test)
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
const transaction = {
    Success: 'Success',
    Pending: 'Pending',
    Failed: 'Failed'
};
for (const status in transaction) {
    console.log(transaction[status]);
    console.log(transaction[status]);
}
export {};
//# sourceMappingURL=indexSignatures.js.map