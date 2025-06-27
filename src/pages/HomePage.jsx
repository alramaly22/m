import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

import Testimonials from "../components/Testimonials";
import { FaSearch, FaUserCheck, FaChartLine, FaRedoAlt, FaComments, FaTachometerAlt } from "react-icons/fa";
import Features from "../components/Features";
// Import images (make sure to update these with your actual image paths)
import heroBg from "../assets/hero.jpg"; // Update with your hero background image path
import feature1 from "../assets/image1.jpg";
import feature2 from "../assets/image2.jpg";
import feature3 from "../assets/image3.jpg";
import feature4 from "../assets/image4.jpg";

const HomePage = () => {
  const navigate = useNavigate(); // ✅ أضفناها هنا

const steps = [
  {
    title: "التسجيل في المنصة",
    text: "املأ بياناتك وسجّل حساب جديد لطفلك بسهولة.",
    icon: <FaUserCheck size={24} />,
    color: "#20B2AA"
  },
  {
    title: "اختبارات النطق",
    text: "نجري اختبارين سريعين نحدد بيهم المشكلة في النطق.",
    icon: <FaSearch size={24} />,
    color: "#FCA43C"
  },
  {
    title: "التدريب التفاعلي",
    text: "ابدأ التدريبات التفاعلية لتحسين نطق الحروف والجمل.",
    icon: <FaChartLine size={24} />,
    color: "#20B2AA"
  },
  {
    title: "متابعة مع الأخصائي",
    text: "احجز دكتور، تابع التقدم، وناقش نتائجك في الشات.",
    icon: <FaComments size={24} />,
    color: "#FCA43C"
  }
];


  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-quart'
    });
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section 
        className="hero-section" 
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          position: 'relative'
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mx-auto text-center">
              <h1 
                className="display-3 fw-bold mb-4" 
                data-aos="fade-down"
                style={{ lineHeight: '1.2' }}
              >
                مساعدة الأطفال، دعم الآباء، توجيه الأخصائيين
              </h1>
              <p 
                className="lead mb-5 fs-4" 
                data-aos="fade-down" 
                data-aos-delay="200"
              >
                الحل الشامل لعلاج مشاكل النطق باستخدام أحدث التقنيات
              </p>
              <div data-aos="fade-up" data-aos-delay="400">
              <Button 
                variant="primary" 
                size="lg" 
                className="mx-2 px-4 py-3 rounded-pill fw-bold"
                style={{ backgroundColor: '#FCA43C', border: 'none' }}
              >
                ابدأ رحلة العلاج الآن
              </Button>
              <Button 
                variant="outline-light" 
                size="lg" 
                className="mx-2 px-4 py-3 rounded-pill fw-bold"
                style={{ borderColor: '#FCA43C', color: '#FCA43C' }}
              >
                تعرف على البرنامج
              </Button>

              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Modern Features Section */}
      <section className="py-5 my-5" id="features">
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-4 fw-bold mb-3">
              <span style={{ 
                background: 'linear-gradient(90deg, rgb(32 178 170), rgb(32 178 170)) text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                خطوات استخدام المنصة
              </span>
            </h2>
            <p className="fs-5 text-muted">
              ٤ مراحل بسيطة تساعد طفلك على تحسين النطق والمتابعة مع الأخصائي
            </p>
          </div>
          
          <Row className="g-4 justify-content-center">
            {steps.map((step, index) => (
              <Col key={index} xl={3} lg={6} md={6} data-aos="fade-up" data-aos-delay={index * 100}>
                <div 
                  className="h-100 p-4 rounded-4 shadow-sm border-0 text-center"
                  style={{
                    backgroundColor: '#fff',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    cursor: 'pointer',
                    borderBottom: `4px solid ${step.color}`
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = ''}
                >
                  <div 
                    className="icon-wrapper mb-4 mx-auto rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: `${step.color}20`,
                      color: step.color
                    }}
                  >
                    {step.icon}
                  </div>
                  <h3 className="h5 mb-3" style={{ color: step.color }}>{step.title}</h3>
                  <p className="mb-0">{step.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Features />

      {/* Full-width CTA Section */}
      <section 
        className="py-5 my-5"
        style={{
          backgroundColor: '#f8f9fa',
          backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(78, 84, 200, 0.1) 0%, rgba(78, 84, 200, 0.05) 90%)'
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col lg={6} data-aos="fade-right">
              <h2 className="display-5 fw-bold mb-4" style={{
       color: "#20B2AA"}}>ابدأ رحلة العلاج اليوم</h2>
              <p className="lead mb-4">
                انضم إلى المئات من العائلات التي ساعدناها في تحسين نطق أطفالهم
              </p>
              <Button 
                variant="primary" 
                size="lg" 
                className="rounded-pill px-4 py-3 fw-bold"
                style={{ backgroundColor: '#fca43c', border: 'none' }}
                onClick={() => navigate("/signup")}
              >
                سجل طفلك الآن
              </Button>

            </Col>
            <Col lg={6} data-aos="fade-left">
              <img 
                src={feature3} 
                alt="Happy child" 
                className="img-fluid rounded-4 shadow"
                style={{ maxHeight: '400px', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Final CTA Section */}
      <section className="py-5 my-5">
        <Container className="text-center">
          <div 
            className="p-5 rounded-4"
            style={{
              background: '#eff0f7',
              color: 'white'
            }}
            data-aos="zoom-in"
          >
            <h2  className="display-5 fw-bold mb-4" style={{
              color: '#20B2AA'
            }}>هل أنت مستعد لبدء الرحلة؟</h2>
            <p className="fs-5 mb-4" style={{
              color: 'black'
            }}>
              تواصل معنا اليوم لجدولة استشارة مجانية مع أحد أخصائيينا
            </p>
            <Button 
              variant="light" 
              size="lg" 
              className="rounded-pill px-4 py-3 fw-bold"
              style={{ backgroundColor: '#fca43c', border: 'none' }}
            >
              اتصل بنا الآن
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;