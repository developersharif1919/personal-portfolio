import './Experience.css'

const Experience = () => {
    
    return (
        <div className="experience" id='experience'>
            <div className="achievement">
                {/* darkMode */}
                <div className="circle" style={{ color:'var(--orange)'}}>1+</div>
                <span style={{ color: 'black' }}>years </span>
                <span>Experience</span>
            </div>
            <div className="achievement">
                <div className="circle" style={{ color:'var(--orange)' }}>20+</div>
                <span style={{ color:'black'}}>completed </span>
                <span>Projects</span>
            </div>
            <div className="achievement">
                <div className="circle" style={{ color:'var(--orange)' }}>5+</div>
                <span style={{ color: 'black' }}>companies </span>
                <span>Work</span>
            </div>
        </div>
    );
};

export default Experience;