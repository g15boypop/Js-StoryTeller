console.log("##### Début du Script #####");

function onlyNumber(obj, id)
{
    obj.value=obj.value.replace(/[^0-9]/,'');
    document.getElementById(id).innerHTML = obj.value;
    // console.log();
}

  function nospace(obj, id)
{
    obj.value=obj.value.replace(/ +/,'');
    document.getElementById(id).innerHTML = obj.value;
    // console.log(id);
}


console.log("##### Fin du Script #####");
