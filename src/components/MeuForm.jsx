export function MeuForm(){
    const handleSubmit =(event) => { //aqui será capturado o evento que houve o submit e armazenado no const
    event.preventDefault();//não atualizar o evento

    const formData =new FormData(event.target); //Transformei os dados que chegam pelo evento em dados de formulário, mas formData é um objeto
    const data = Object.fromEntries(formData); //entradas do FormData.O data é o dado do fromulário
    console.log(data);

    alert(`Bem vindo ${data.userName}`);

    } 

    return(
        <form onSubmit={handleSubmit}>  {/*Como fazer para capturar os dados enviados?Pela função que será executada entre chaves*/}
            <input type="text" name="userName" id= "userName"/>
            <input type="password" name="password" id= "password"/>
            <botton type="submit"> Enviar </botton>
        </form>
    )
}