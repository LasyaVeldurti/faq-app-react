// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

const faqsList = [
  {
    id: 0,
    questionText: 'What is IRC?',
    answerText:
      'IRC is an Industry Ready Certification that represents your readiness for a job with the necessary skills.',
  },
  {
    id: 1,
    questionText: 'What is the medium of instruction?',
    answerText:
      'The courses would be delivered in English and Telugu. The program will be available in more vernacular languages soon.',
  },
  {
    id: 2,
    questionText:
      'Is there an EMI option to pay the fee for CCBP Tech 4.0 Intensive?',
    answerText:
      'Yes, EMI support is available for credit cards. Please select EMI option while making payment for more information.',
  },
  {
    id: 3,
    questionText: 'How will my doubts be cleared? What is the mechanism?',
    answerText:
      'You can ask your doubts in the discussions section and course mentor will answer them. You can also see the doubts asked by other students.',
  },
]

class Faqs extends Component {
  state = {initialFaqList: faqsList}

  render() {
    const {initialFaqList} = this.state
    console.log(initialFaqList)
    return (
      <div className="bg-container">
        <div className="faq-container">
          <h1 className="title">FAQs</h1>
          <div className="faq-div-container">
            <ul className="fal-ul-container">
              {initialFaqList.map(eachItem => (
                <FaqItem faqDetails={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Faqs
