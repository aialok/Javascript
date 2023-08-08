function fun(i, gun)
{
    console.log("Hey", i);

    gun();

}

function gun(){
  return function (){ console.log("just coding")};
}


fun("Alok",gun());




