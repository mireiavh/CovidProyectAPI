import './faqs.css';
import ImgMob2 from "../../assets/images/phone-1.png"

function Faqs() 
{
return (
	<>
	<section className="faqs-div">
		<div className='faqs'>
			<p>Faqs</p>
			<h2>Frequently Asked Questions</h2>
		</div>
		<div className='descriptions-faqs'>
			<h5 className='faqTitle'>01. Unique and bold website design</h5>
			<p className='lorem-ipsum-one'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
				Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
				consequat.
			</p>
				<h5>02. We deliver the highest quality design</h5>
				<h5>03. We deliver the highest quality design</h5>
		</div>

	</section>
		
	<section className='faqs2'>
		
		<div className='faqsTitle'>
			<h2>Get the simple app for latest news</h2>
			<p>Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.</p>
		</div>
		<div>
			<img className='phone2' src={ImgMob2} alt="phone2" />
		</div>
		</section>
	</>
  )
}

export default Faqs
