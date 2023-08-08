teacher="Dr. Shashikant";
function fun()
{   
    var teacher="Dr. RD";
    teachingaAssistant="Ajit bhaiya"; // implicit global variable
    console.log(teachingaAssistant);
    console.log(teacher);
}
console.log(teacher);
fun();
console.log(teacher);
console.log(teachingaAssistant);

