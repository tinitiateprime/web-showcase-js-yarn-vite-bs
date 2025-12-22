import React, { useState, useEffect, useRef } from "react";
import { 
  Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, 
  Send, MessageCircle, Star, Zap, Globe, Heart, Sparkles,
  Camera, Music, Gamepad2, Coffee, Rocket, Shield
} from "lucide-react";

const AdvancedContact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 3000);
    }, 2000);
  };

  const floatingIcons = [
    { icon: Star, color: '#ffd700', delay: 0 },
    { icon: Zap, color: '#ff6b6b', delay: 1 },
    { icon: Globe, color: '#4ecdc4', delay: 2 },
    { icon: Heart, color: '#ff69b4', delay: 3 },
    { icon: Sparkles, color: '#9c88ff', delay: 4 },
    { icon: Camera, color: '#45b7d1', delay: 5 },
    { icon: Music, color: '#96ceb4', delay: 6 },
    { icon: Gamepad2, color: '#ffeaa7', delay: 7 },
    { icon: Coffee, color: '#d63031', delay: 8 },
    { icon: Rocket, color: '#fd79a8', delay: 9 },
    { icon: Shield, color: '#00b894', delay: 10 },
    { icon: MessageCircle, color: '#fdcb6e', delay: 11 }
  ];

  return (
    <div ref={containerRef} style={containerStyle}>
      {/* Dynamic Background Gradient */}
      <div style={{
        ...dynamicBgStyle,
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,107,107,0.3) 0%, rgba(78,205,196,0.2) 25%, rgba(69,183,209,0.2) 50%, rgba(156,136,255,0.3) 100%)`
      }}></div>

      {/* 3D Floating Background Elements */}
      <div style={bg3dElement1}></div>
      <div style={bg3dElement2}></div>
      <div style={bg3dElement3}></div>
      <div style={bg3dElement4}></div>

      {/* Floating Icons */}
      {floatingIcons.map(({ icon: Icon, color, delay }, index) => (
        <div
          key={index}
          style={{
            ...floatingIconStyle,
            left: `${10 + (index * 7) % 80}%`,
            top: `${20 + (index * 13) % 60}%`,
            animationDelay: `${delay}s`,
            color: color
          }}
        >
          <Icon size={24} />
        </div>
      ))}

      {/* Particle System */}
      {[...Array(30)].map((_, i) => (
        <div key={i} style={{
          ...advancedParticleStyle,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 25}s`,
          animationDuration: `${20 + Math.random() * 15}s`,
          background: `hsl(${Math.random() * 360}, 70%, 60%)`
        }}></div>
      ))}

      {/* Title Section with 3D Effect */}
      <div style={{
        ...titleSectionStyle,
        transform: isVisible ? 'translateY(0) rotateX(0deg)' : 'translateY(-100px) rotateX(-15deg)',
        opacity: isVisible ? 1 : 0,
        transition: 'all 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}>
        <h1 style={advanced3DTitleStyle}>
          <span style={title3DIconStyle}>🚀</span>
          Connect With Us
          <div style={titleHologramStyle}></div>
        </h1>
        <p style={subtitle3DStyle}>
          Experience the future of communication - where design meets innovation
        </p>
      </div>

      <div style={mainContentStyle}>
        {/* Enhanced Contact Info Card */}
        <div style={{
          ...contactInfo3DStyle,
          transform: isVisible ? 'translateX(0) rotateY(0deg) translateZ(0)' : 'translateX(-150px) rotateY(-20deg) translateZ(-100px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s'
        }}>
          <div style={cardHeader3DStyle}>
            <h3 style={cardTitle3DStyle}>
              <Sparkles style={{marginRight: '10px', color: '#ffd700'}} />
              Contact Information
            </h3>
          </div>
          
          <div style={contactItems3DStyle}>
            {[
              { icon: Mail, text: 'info@futuristic.com', color: '#3b82f6' },
              { icon: Phone, text: '+91 98765 43210', color: '#10b981' },
              { icon: MapPin, text: 'Hyderabad, India', color: '#f59e0b' }
            ].map(({ icon: Icon, text, color }, index) => (
              <div 
                key={index}
                style={contactItem3DStyle} 
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(15px) scale(1.05) rotateY(5deg)';
                  e.currentTarget.style.background = `linear-gradient(135deg, ${color}20, ${color}10)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0) scale(1) rotateY(0deg)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                }}
              >
                <Icon style={{...icon3DStyle, color: color}} />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Enhanced 3D Social Icons */}
          <div style={social3DContainerStyle}>
            {[
              { icon: Facebook, color: '#1877f2', name: 'Facebook' },
              { icon: Twitter, color: '#1da1f2', name: 'Twitter' },
              { icon: Instagram, color: '#e4405f', name: 'Instagram' },
              { icon: Linkedin, color: '#0a66c2', name: 'LinkedIn' }
            ].map(({ icon: Icon, color, name }, index) => (
              <div key={index} style={socialIconWrapperStyle}>
                <a 
                  href="#" 
                  style={{
                    ...socialIcon3DStyle,
                    backgroundColor: color,
                    animationDelay: `${index * 0.2}s`
                  }} 
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-15px) rotateX(15deg) rotateY(15deg) scale(1.3)';
                    e.target.style.boxShadow = `0 25px 50px ${color}60, 0 0 30px ${color}80`;
                  }} 
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) scale(1)';
                    e.target.style.boxShadow = `0 15px 30px ${color}40`;
                  }}
                >
                  <Icon />
                </a>
                <span style={socialLabelStyle}>{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Form */}
        <div style={{
          ...formContainer3DStyle,
          transform: isVisible ? 'translateX(0) rotateY(0deg) translateZ(0)' : 'translateX(150px) rotateY(20deg) translateZ(-100px)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 1.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.6s'
        }}>
          <div style={form3DStyle}>
            {formSubmitted && (
              <div style={successMessageStyle}>
                <Star style={{color: '#ffd700', marginRight: '10px'}} />
                Message sent successfully! ✨
              </div>
            )}
            
            <div style={formHeader3DStyle}>
              <h3 style={formTitle3DStyle}>
                <MessageCircle style={{marginRight: '10px', color: '#3b82f6'}} />
                Send us a Message
              </h3>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div style={inputGroup3DStyle}>
                <label style={label3DStyle}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  style={input3DStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3b82f6';
                    e.target.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.3)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                />
              </div>
              
              <div style={inputGroup3DStyle}>
                <label style={label3DStyle}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  style={input3DStyle}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3b82f6';
                    e.target.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.3)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                />
              </div>
              
              <div style={inputGroup3DStyle}>
                <label style={label3DStyle}>Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  placeholder="Tell us what's on your mind..."
                  style={{...input3DStyle, resize: 'vertical', minHeight: '120px'}}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#3b82f6';
                    e.target.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.3)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                style={{
                  ...button3DStyle,
                  transform: isSubmitting ? 'scale(0.98)' : 'scale(1)',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer'
                }}
                disabled={isSubmitting}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = 'translateY(-5px) scale(1.02)';
                    e.target.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.4), 0 0 30px rgba(59, 130, 246, 0.6)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 15px 35px rgba(59, 130, 246, 0.3)';
                  }
                }}
              >
                {isSubmitting ? (
                  <>
                    <div style={spinner3DStyle}></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send style={{marginRight: '10px'}} />
                    <span>Send Message</span>
                    <Rocket style={{marginLeft: '10px', animation: 'bounce 2s infinite'}} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Enhanced Map Section */}
      <div style={{
        ...mapSection3DStyle,
        transform: isVisible ? 'translateY(0) scale(1) rotateX(0deg)' : 'translateY(100px) scale(0.9) rotateX(10deg)',
        opacity: isVisible ? 1 : 0,
        transition: 'all 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.2s'
      }}>
        <h3 style={mapTitle3DStyle}>
          <Globe style={{marginRight: '15px', color: '#4ecdc4'}} />
          Find Us on the Map
        </h3>
        <div style={mapContainer3DStyle}>
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.024942143037!2d78.48667121418847!3d17.38504448806025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb977ae3c85923%3A0xe1b394c1fd3e7129!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1687591098474!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={mapIframe3DStyle}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes float3D {
          0%, 100% { 
            transform: translateY(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg); 
          }
          25% { 
            transform: translateY(-15px) rotateX(5deg) rotateY(5deg) rotateZ(2deg); 
          }
          50% { 
            transform: translateY(-25px) rotateX(0deg) rotateY(10deg) rotateZ(-2deg); 
          }
          75% { 
            transform: translateY(-10px) rotateX(-5deg) rotateY(5deg) rotateZ(1deg); 
          }
        }
        
        @keyframes floatingIcon {
          0%, 100% { 
            transform: translateY(0px) rotateZ(0deg) scale(1); 
            opacity: 0.7;
          }
          50% { 
            transform: translateY(-20px) rotateZ(180deg) scale(1.1); 
            opacity: 1;
          }
        }
        
        @keyframes advancedParticle {
          0% { 
            transform: translateY(100vh) rotateZ(0deg) scale(0); 
            opacity: 0; 
          }
          10% { 
            opacity: 1; 
            transform: translateY(90vh) rotateZ(36deg) scale(1);
          }
          90% { 
            opacity: 1; 
            transform: translateY(10vh) rotateZ(324deg) scale(1);
          }
          100% { 
            transform: translateY(-10vh) rotateZ(360deg) scale(0); 
            opacity: 0; 
          }
        }
        
        @keyframes pulse3D {
          0%, 100% { 
            transform: scale(1) rotateY(0deg); 
            box-shadow: 0 0 20px rgba(255,255,255,0.3);
          }
          50% { 
            transform: scale(1.1) rotateY(5deg); 
            box-shadow: 0 0 30px rgba(255,255,255,0.6);
          }
        }
        
        @keyframes hologram {
          0% { 
            background-position: -200% 0; 
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
          100% { 
            background-position: 200% 0; 
            opacity: 0.8;
          }
        }
        
        @keyframes bounce3D {
          0%, 20%, 53%, 80%, 100% { 
            transform: translate3d(0,0,0) rotateY(0deg) rotateX(0deg); 
          }
          40%, 43% { 
            transform: translate3d(0,-15px,0) rotateY(10deg) rotateX(5deg); 
          }
        }
        
        @keyframes spin3D {
          0% { 
            transform: rotate(0deg) rotateY(0deg); 
          }
          100% { 
            transform: rotate(360deg) rotateY(180deg); 
          }
        }

        @keyframes bgShift {
          0%, 100% { 
            transform: translate(-50%, -50%) rotate(0deg) scale(1);
          }
          50% { 
            transform: translate(-50%, -50%) rotate(180deg) scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

// Enhanced Styles
const containerStyle = {
  minHeight: '100vh',
  padding: '20px 15px',
  fontFamily: "'Inter', 'Segoe UI', sans-serif",
  position: 'relative',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f0f23 50%, #16213e 75%, #1a1a2e 100%)',
  perspective: '1000px'
};

const dynamicBgStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  transition: 'background 0.3s ease',
  zIndex: 1
};

const bg3dElement1 = {
  position: 'absolute',
  top: '15%',
  left: '10%',
  width: '120px',
  height: '120px',
  background: 'linear-gradient(45deg, #ff6b6b40, #4ecdc440)',
  borderRadius: '30%',
  animation: 'float3D 8s ease-in-out infinite',
  transformStyle: 'preserve-3d',
  zIndex: 2
};

const bg3dElement2 = {
  position: 'absolute',
  top: '60%',
  right: '8%',
  width: '200px',
  height: '200px',
  background: 'linear-gradient(135deg, #45b7d140, #96ceb440)',
  borderRadius: '50%',
  animation: 'float3D 10s ease-in-out infinite reverse',
  transformStyle: 'preserve-3d',
  zIndex: 2
};

const bg3dElement3 = {
  position: 'absolute',
  bottom: '25%',
  left: '5%',
  width: '100px',
  height: '100px',
  background: 'linear-gradient(45deg, #9c88ff40, #fd79a840)',
  borderRadius: '20%',
  animation: 'bgShift 12s ease-in-out infinite',
  transformStyle: 'preserve-3d',
  zIndex: 2
};

const bg3dElement4 = {
  position: 'absolute',
  top: '40%',
  right: '30%',
  width: '80px',
  height: '80px',
  background: 'linear-gradient(45deg, #ffd70040, #ff69b440)',
  borderRadius: '40%',
  animation: 'float3D 6s ease-in-out infinite',
  transformStyle: 'preserve-3d',
  zIndex: 2
};

const floatingIconStyle = {
  position: 'absolute',
  animation: 'floatingIcon 15s ease-in-out infinite',
  zIndex: 3,
  fontSize: '24px',
  filter: 'drop-shadow(0 0 10px currentColor)'
};

const advancedParticleStyle = {
  position: 'absolute',
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  animation: 'advancedParticle linear infinite',
  zIndex: 2
};

const titleSectionStyle = {
  textAlign: 'center',
  marginBottom: '40px',
  transformStyle: 'preserve-3d',
  zIndex: 10,
  position: 'relative'
};

const advanced3DTitleStyle = {
  fontSize: 'clamp(24px, 4vw, 36px)',
  fontWeight: '900',
  background: 'linear-gradient(45deg, #fff, #4ecdc4, #45b7d1, #9c88ff)',
  backgroundSize: '400% 400%',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  margin: '0',
  position: 'relative',
  display: 'inline-block',
  textShadow: '0 0 30px rgba(255,255,255,0.5)',
  animation: 'hologram 3s ease-in-out infinite'
};

const title3DIconStyle = {
  display: 'inline-block',
  animation: 'bounce3D 3s infinite',
  marginRight: '20px',
  fontSize: '1.2em',
  filter: 'drop-shadow(0 0 15px #ffd700)'
};

const titleHologramStyle = {
  position: 'absolute',
  bottom: '-15px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '150px',
  height: '6px',
  background: 'linear-gradient(90deg, transparent, #4ecdc4, #45b7d1, #9c88ff, transparent)',
  borderRadius: '3px',
  animation: 'hologram 2s infinite'
};

const subtitle3DStyle = {
  color: 'rgba(255, 255, 255, 0.8)',
  fontSize: '20px',
  marginTop: '30px',
  fontWeight: '300',
  textShadow: '0 0 20px rgba(255,255,255,0.3)'
};

const mainContentStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '50px',
  justifyContent: 'center',
  maxWidth: '1400px',
  margin: '0 auto',
  zIndex: 10,
  position: 'relative'
};

const contactInfo3DStyle = {
  flex: '1 1 400px',
  maxWidth: '450px',
  background: 'rgba(255, 255, 255, 0.08)',
  backdropFilter: 'blur(25px)',
  borderRadius: '25px',
  padding: '50px',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
  transformStyle: 'preserve-3d'
};

const cardHeader3DStyle = {
  marginBottom: '40px'
};

const cardTitle3DStyle = {
  color: '#fff',
  fontSize: '26px',
  fontWeight: '700',
  margin: '0',
  display: 'flex',
  alignItems: 'center',
  textShadow: '0 0 20px rgba(255,255,255,0.3)'
};

const contactItems3DStyle = {
  marginBottom: '50px'
};

const contactItem3DStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  color: 'rgba(255, 255, 255, 0.9)',
  fontSize: '18px',
  marginBottom: '25px',
  padding: '20px',
  borderRadius: '15px',
  background: 'rgba(255, 255, 255, 0.08)',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  cursor: 'default',
  transformStyle: 'preserve-3d',
  border: '1px solid rgba(255, 255, 255, 0.1)'
};

const icon3DStyle = {
  fontSize: '24px',
  animation: 'pulse3D 3s infinite',
  filter: 'drop-shadow(0 0 10px currentColor)'
};

const social3DContainerStyle = {
  display: 'flex',
  gap: '25px',
  justifyContent: 'center',
  flexWrap: 'wrap'
};

const socialIconWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px'
};

const socialIcon3DStyle = {
  color: '#fff',
  padding: '18px',
  borderRadius: '50%',
  textDecoration: 'none',
  fontSize: '24px',
  transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
  animation: 'bounce3D 3s infinite',
  transformStyle: 'preserve-3d',
  border: '2px solid rgba(255, 255, 255, 0.2)'
};

const socialLabelStyle = {
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: '12px',
  fontWeight: '500',
  textTransform: 'uppercase',
  letterSpacing: '0.5px'
};

const formContainer3DStyle = {
  flex: '1 1 450px',
  maxWidth: '550px',
  transformStyle: 'preserve-3d'
};

const form3DStyle = {
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(25px)',
  padding: '50px',
  borderRadius: '25px',
  boxShadow: '0 30px 60px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  position: 'relative'
};

// const successMessageStyle = {
//   position: 'absolute',
//   top: '20px',
//   left: '50%',
//   transform: 'translateX(-50%)',
//   background: 'linear-gradient(135deg, #10b981, #059669)',
//   color: 'white',
//   padding: '15px 25px',
//   borderRadius: '50px',
//   display: 'flex',
//   alignItems: 'center',
//   fontWeight: '600',
//   boxShadow: '0 10px 30px rgba(16, 185, 129, 0.4)',
//   zIndex: 1000,
//   animation: 'bounce3D 2s ease-in-out'
// };

const formHeader3DStyle = {
  marginBottom: '40px',
  textAlign: 'center'
};

const formTitle3DStyle = {
  color: '#1e293b',
  fontSize: '28px',
  fontWeight: '700',
  margin: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const inputGroup3DStyle = {
  marginBottom: '30px'
};

const label3DStyle = {
  display: 'block',
  marginBottom: '12px',
  color: '#374151',
  fontWeight: '600',
  fontSize: '16px',
  textTransform: 'uppercase',
  letterSpacing: '0.5px'
};

const input3DStyle = {
  width: '100%',
  padding: '18px 20px',
  borderRadius: '15px',
  border: '2px solid rgba(255, 255, 255, 0.3)',
  outline: 'none',
  fontSize: '16px',
  background: 'rgba(255, 255, 255, 0.9)',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  boxSizing: 'border-box',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(10px)'
};

const button3DStyle = {
  width: '100%',
  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
  color: '#fff',
  padding: '20px 40px',
  border: 'none',
  borderRadius: '15px',
  fontSize: '18px',
  fontWeight: '700',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  boxShadow: '0 15px 35px rgba(59, 130, 246, 0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  transformStyle: 'preserve-3d'
};

const spinner3DStyle = {
  width: '24px',
  height: '24px',
  border: '3px solid transparent',
  borderTop: '3px solid #fff',
  borderRadius: '50%',
  animation: 'spin3D 1s linear infinite',
  marginRight: '12px'
};

const mapSection3DStyle = {
  marginTop: '100px',
  textAlign: 'center',
  maxWidth: '1200px',
  margin: '100px auto 0',
  zIndex: 10,
  position: 'relative'
};

const mapTitle3DStyle = {
  color: '#fff',
  fontSize: '32px',
  fontWeight: '700',
  marginBottom: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textShadow: '0 0 20px rgba(255,255,255,0.3)'
};

const mapContainer3DStyle = {
  borderRadius: '25px',
  overflow: 'hidden',
  boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3), 0 0 50px rgba(78, 205, 196, 0.2)',
  border: '2px solid rgba(255, 255, 255, 0.2)',
  transformStyle: 'preserve-3d'
};

const mapIframe3DStyle = {
  border: '0',
  filter: 'contrast(1.3) saturate(1.2) hue-rotate(10deg)'
}

export default AdvancedContact;