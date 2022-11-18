import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Спестете време и пари!</h1>
      <span className="mailDesc">Абонирайте се и ще ви изпращаме най-добрите оферти</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Вашия имейл"/>
        <button>Абонирай се</button>
      </div>
    </div>
  )
}

export default MailList  