import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 text-center max-w-2xl mx-auto">
      <p className="text-accent-cyan mb-2 font-mono">06. What’s Next?</p>
      <h2 className="text-4xl md:text-5xl font-bold text-light-slate mb-4">Get In Touch</h2>
      <p className="text-slate mb-8">
        I'm currently looking for new opportunities, and my inbox is always open. Whether you have a question or just want to say hi, I’ll get back to you!
      </p>
      <a 
        href="mailto:mohebullah.cse@gmail.com" 
        className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-light-slate rounded-sm group bg-gradient-to-br from-accent-pink to-accent-cyan hover:text-white"
        >
          <span className="relative px-8 py-4 transition-all ease-in duration-150 bg-primary rounded-sm group-hover:bg-opacity-0">
              Say Hello
          </span>
      </a>
    </section>
  );
};

export default Contact;