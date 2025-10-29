import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 text-center max-w-2xl mx-auto">
      <p className="text-accent mb-2 font-mono">06. What’s Next?</p>
      <h2 className="text-4xl md:text-5xl font-bold text-light-slate mb-4">Get In Touch</h2>
      <p className="text-slate mb-8">
        I'm currently open to new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll do my best to get back to you!
      </p>
      <a 
        href="mailto:mohebullah.cse@gmail.com" 
        className="inline-block px-8 py-4 border border-accent text-accent rounded-sm hover:bg-accent/10 hover:shadow-glow transition-all duration-300 ease-custom-bezier font-mono"
      >
        Say Hello
      </a>
      <div className="mt-16 text-center text-dark-slate italic">
        <p>“Every error is an opportunity to learn. Don't be afraid to make mistakes; they're part of the coding process.”</p>
      </div>
    </section>
  );
};

export default Contact;