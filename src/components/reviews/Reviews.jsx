import React, { useEffect, useState } from 'react'
import { FiArrowLeft, FiArrowRight, FiExternalLink, FiPause, FiPlay } from 'react-icons/fi'
import './Reviews.css'

const reviews = [
  {
    name: 'Tammy Holton (Tamatha)',
    text: "I actually had a pleasant visit. Everything went well They are nice. They are fast but yet do their job very well and they also take their time letting you talk about whatever you need or feel that you need to say, but they get their job done and they're really good at what they do. Actually I can honestly say I enjoyed my dentist visit for the first time ever in life. I would definitely recommend them.",
    url: 'https://share.google/wIDOF9hB28tPHJ3UR',
  },
  {
    name: 'Darleen Blake',
    text: 'Dr. Hunt is a really caring person. He treated my daughter and she said he did not hurt her at all. He also keeps talking to you and he makes you laugh, making you not be nervous. He checks on you after he finishes. My daughter was a little dizzy and he ask his assistant what was wrong. She told him and he came back into the room and stayed with her til she felt better!',
    url: 'https://share.google/Eo5L6fJtQcxGe5c5D',
  },
  {
    name: 'Christy Stinson',
    text: "I cannot say enough good things about Dr Hunt or his staff. They have always made me feel comfortable with every little pain. Dr. Hunt and his staff cares about if your in pain and does everything in their power to make it as painless as can be. All other dentist seemed like they didn't care. I am a patient for life.",
    url: 'https://share.google/nT0cAT52ywsSjGjad',
  },
  {
    name: 'Brooke Bailey',
    text: "I have dental anxiety severely bad and I had put off getting a cavity fixed because of that for years. It had got to the point I was in so much pain from an abscess that I had to do something. I called Dr. Hunts office and they had a cancellation, luckily for me I was able to be seen asap! The staff is friendly and welcoming. Dr. Hunt is amazing and witty. I don’t remember the womans name who held my hand during my procedure but THANK YOU for being there and helping me while I was anxious. You and your beautiful dog helped keep me calm during my time there. I appreciate it so much. ❤️ Definitely recommend this office!",
    url: 'https://share.google/X3E4W0aasXuLvTJrS',
  },
  {
    name: 'Robyn Hodge',
    text: 'This is an amazing dental practice. Dr Hunt is amazing. The office is very clean, and nice inside. The staff are all very knowledgeable and nice and make you feel welcome. They are usually able to get you an appointment within a reasonable amount of time, even in an emergency. The wait time in the lobby is extremely minimal even when it appears to be busy. I have never been fond of any doctors office until now, but I have to say this is my favorite ive ever been too. I highly recommend this office.',
    url: 'https://share.google/fg6i3EvarguR9qG7X',
  },
]

function Reviews() {
  const [activeReview, setActiveReview] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [hasFocus, setHasFocus] = useState(false)
  const [isPlaying, setIsPlaying] = useState(() => (
    typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ))
  const review = reviews[activeReview]
  const previousReview = reviews[(activeReview + reviews.length - 1) % reviews.length]
  const nextReview = reviews[(activeReview + 1) % reviews.length]

  useEffect(() => {
    if (!isPlaying || isHovered || hasFocus) return undefined

    const interval = window.setInterval(() => {
      setActiveReview((current) => (current + 1) % reviews.length)
    }, 7000)

    return () => window.clearInterval(interval)
  }, [isPlaying, isHovered, hasFocus])

  const showReview = (index) => {
    setActiveReview((index + reviews.length) % reviews.length)
  }

  const togglePlayback = () => {
    if (!isPlaying) setHasFocus(false)
    setIsPlaying(!isPlaying)
  }

  const isAutoAdvancing = isPlaying && !isHovered && !hasFocus

  return (
    <section id="Reviews" className="reviews-section" aria-labelledby="reviews-title">
      <div className="reviews-inner">
        <div className="reviews-heading">
          <span className="section-kicker">Kind words from our patients</span>
          <h2 id="reviews-title">Reviews from our community</h2>
          <p>Read what patients have shared about their experiences at our practice.</p>
        </div>

        <div
          className="review-carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Patient reviews"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocusCapture={() => setHasFocus(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setHasFocus(false)
          }}
        >
          <div className="review-deck">
            <button
              type="button"
              className="review-peek review-peek-previous"
              onClick={() => showReview(activeReview - 1)}
              aria-label={`Show previous review by ${previousReview.name}`}
            >
              <span className="review-peek-label">Previous · {previousReview.name}</span>
              <p>{previousReview.text}</p>
            </button>
            <button
              type="button"
              className="review-peek review-peek-next"
              onClick={() => showReview(activeReview + 1)}
              aria-label={`Show next review by ${nextReview.name}`}
            >
              <span className="review-peek-label">Up next · {nextReview.name}</span>
              <p>{nextReview.text}</p>
            </button>
            <article key={review.name} className="review-card" aria-live={isAutoAdvancing ? 'off' : 'polite'} aria-atomic="true">
              <div className="review-card-topline">
                <span className="google-review-label">Google review</span>
              </div>
              <div className="review-rating" role="img" aria-label="5 out of 5 stars">
                <span aria-hidden="true">★★★★★</span>
              </div>
              <blockquote>{review.text}</blockquote>
              <div className="review-card-footer">
                <div className="review-author">
                  <strong>{review.name}</strong>
                </div>
                <a href={review.url} target="_blank" rel="noreferrer" className="review-source-link">
                  View on Google <FiExternalLink aria-hidden="true" focusable="false" />
                </a>
              </div>
            </article>
          </div>

          <div className="review-controls" aria-label="Review carousel controls">
            <button
              type="button"
              onClick={togglePlayback}
              aria-label={isPlaying ? 'Pause automatic reviews' : 'Play automatic reviews'}
              aria-pressed={isPlaying}
            >
              {isPlaying
                ? <FiPause aria-hidden="true" focusable="false" />
                : <FiPlay aria-hidden="true" focusable="false" />}
            </button>
            <button type="button" onClick={() => showReview(activeReview - 1)} aria-label="Previous review">
              <FiArrowLeft aria-hidden="true" focusable="false" />
            </button>
            <div className="review-dots" aria-label="Choose a review">
              {reviews.map((item, index) => (
                <button
                  type="button"
                  key={item.name}
                  className={index === activeReview ? 'review-dot is-active' : 'review-dot'}
                  onClick={() => showReview(index)}
                  aria-label={`Show review by ${item.name}`}
                  aria-current={index === activeReview ? 'true' : undefined}
                />
              ))}
            </div>
            <button type="button" onClick={() => showReview(activeReview + 1)} aria-label="Next review">
              <FiArrowRight aria-hidden="true" focusable="false" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
