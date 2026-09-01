function HowItWorks() { 
  return ( 
    <section className="how-section"> 
 
      <div className="section-heading"> 
        <h2>How ordering works</h2> 
        <div className="heart-divider">♡</div> 
      </div> 
 
      <div className="how-grid"> 
 
        {/* ORDERING TIME FRAME */} 
        <article className="info-card rose-card"> 
 
          <div className="info-icon"> 

            {/* Clock icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="9"
              />

              <path d="M12 7v5l3 2" />

            </svg>

          </div> 
 
          <div className="info-content"> 
            <h3>ORDERING TIME FRAME</h3> 
 
            <ul> 
              <li>At least 2 days notice</li> 
              <li>Up to 1 week for complex orders</li> 
            </ul> 
          </div> 
 
        </article> 
 
 
        {/* PAYMENT */} 
        <article className="info-card teal-card"> 
 
          <div className="info-icon teal-icon"> 

            {/* Payment / Card icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
              />

              <path d="M3 10h18" />

              <path d="M7 15h4" />

            </svg>

          </div> 
 
          <div className="info-content"> 
            <h3>PAYMENT</h3> 
 
            <ul> 
              <li>50% non-refundable deposit confirms the order</li> 
              <li>Full payment on the date of pickup</li> 
            </ul> 
          </div> 
 
        </article> 
 
 
        {/* DESIGN */} 
        <article className="info-card rose-card"> 
 
          <div className="info-icon"> 

            {/* Instagram-style icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
              />

              <circle
                cx="12"
                cy="12"
                r="4"
              />

              <circle
                cx="17.5"
                cy="6.5"
                r="0.8"
                fill="currentColor"
                stroke="none"
              />

            </svg>

          </div> 
 
          <div className="info-content"> 
            <h3>DESIGN</h3> 
 
            <ul> 
              <li>No two cakes are ever identical</li> 
              <li>Each cake is a work of art, made by hand</li> 
              <li>Inspiration pictures are used as a guide</li> 
            </ul> 
          </div> 
 
        </article> 
 
 
        {/* COLLECTIONS */} 
        <article className="info-card teal-card"> 
 
          <div className="info-icon teal-icon"> 

            {/* Location / Map Pin icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />

              <circle
                cx="12"
                cy="10"
                r="2.5"
              />

            </svg>

          </div> 
 
          <div className="info-content"> 
            <h3>COLLECTIONS</h3> 
 
            <ul> 
              <li>Open Monday – Saturday</li> 
              <li>Orders collected at the agreed time</li> 
              <li>Delivery available at an extra cost</li> 
            </ul> 
          </div> 
 
        </article> 
 
      </div> 
 
    </section> 
  ); 
} 
 
export default HowItWorks;