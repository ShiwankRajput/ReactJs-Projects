import styles from './NewsLetter.module.css'

const NewsLetter = () => {
  return (
    <div className={styles.newsLetter}>
      <h1>Receive Special Deals in Your Inbox</h1>
      <p>Join our mailing list and never miss an update</p>
      <div>
        <input type="email" placeholder='Your email address'/>
        <button>Subscribe</button>
      </div>
    </div> 
  )
}

export default NewsLetter
