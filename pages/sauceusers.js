export const Users=[
{
    username:'standard_user' , password: 'secret_sauce', expected: 'success'
},
{
username: 'problem_user',
password:'secret_sauce', expected: 'success'
}
,
{
username: 'performance_glitch_user',
password: 'secret_sauce', expected: 'success'
},
{
    username: 'wrong_user',
password:'wrong_pass', expected: 'fail'

},

{
    username: 'Admin', password: '123456', expected: 'fail'
}
];
