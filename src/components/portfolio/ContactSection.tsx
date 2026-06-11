import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { socialLinks } from '@/lib/links';
import {
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
  MapPin,
  Clock,
} from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const [state, handleFormspreeSubmit] = useForm('xqegkrwe');

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Enter a valid email';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 20)
      e.message = 'Message must be at least 20 characters';
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof form]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    // Build a synthetic FormData from our controlled state and pass to Formspree
    const data = new FormData();
    data.append('name', form.name);
    data.append('email', form.email);
    data.append('subject', form.subject);
    data.append('message', form.message);

    // Formspree's handleSubmit accepts a FormData-compatible event or object.
    // We cast the event and let Formspree handle the actual submission.
    await handleFormspreeSubmit(e);

    if (!state.errors || state.errors.length === 0) {
      setForm({ name: '', email: '', subject: '', message: '' });
    }
  };

  const resetForm = () => {
    // Reset Formspree state by remounting — simplest approach is a key trick,
    // but useForm doesn't expose a reset. We just reload the success state
    // by navigating away from the success screen via our own flag.
    setForm({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    // Force a page-level re-render by reloading — or simply use window.location.reload()
    // A cleaner UX: just keep succeeded=true and let Formspree state persist.
    // The button below will refresh the page to reset Formspree's internal state.
    window.location.reload();
  };

  return (
    <section id='contact' className='py-24 relative overflow-hidden' ref={ref}>
      <div
        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl pointer-events-none'
        style={{ background: 'hsl(var(--cyan))' }}
      />

      <div className='container mx-auto px-6'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-14'
        >
          <p
            className='text-sm font-mono mb-2'
            style={{ color: 'hsl(var(--cyan))' }}
          >
            // get in touch
          </p>
          <h2 className='section-title'>
            Let's <span className='gradient-text'>Work Together</span>
          </h2>
          <div className='section-divider' />
          <p className='section-subtitle mx-auto'>
            Have a project in mind or just want to chat? I'd love to hear from
            you.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
          className='grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto'
        >
          {/* Left: Info */}
          <motion.div
            variants={itemVariants}
            className='lg:col-span-2 space-y-8'
          >
            <div>
              <h3 className='text-xl font-semibold text-foreground mb-2'>
                Contact Information
              </h3>
              <p className='text-muted-foreground text-sm leading-relaxed'>
                I'm currently available for full-time positions and freelance
                work. If you have a project that you want to get started or need
                someone on your team, feel free to reach out.
              </p>
            </div>

            {/* Info items */}
            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                <div
                  className='w-10 h-10 rounded-lg flex items-center justify-center'
                  style={{ background: 'hsl(var(--cyan) / 0.12)' }}
                >
                  <Mail
                    className='w-5 h-5'
                    style={{ color: 'hsl(var(--cyan))' }}
                  />
                </div>
                <div>
                  <p className='text-xs text-muted-foreground'>Email</p>
                  <a
                    href='mailto:developer.kamraniqbal@gmail.com'
                    className='text-sm font-medium text-foreground hover:text-cyan transition-colors'
                  >
                    developer.kamraniqbal@gmail.com
                  </a>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <div
                  className='w-10 h-10 rounded-lg flex items-center justify-center'
                  style={{ background: 'hsl(var(--cyan) / 0.12)' }}
                >
                  <MapPin
                    className='w-5 h-5'
                    style={{ color: 'hsl(var(--cyan))' }}
                  />
                </div>
                <div>
                  <p className='text-xs text-muted-foreground'>Location</p>
                  <p className='text-sm font-medium text-foreground'>
                    Karachi, Pakistan
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <div
                  className='w-10 h-10 rounded-lg flex items-center justify-center'
                  style={{ background: 'hsl(var(--cyan) / 0.12)' }}
                >
                  <Clock
                    className='w-5 h-5'
                    style={{ color: 'hsl(var(--cyan))' }}
                  />
                </div>
                <div>
                  <p className='text-xs text-muted-foreground'>Response Time</p>
                  <p className='text-sm font-medium text-foreground'>
                    Usually within 6 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className='text-sm font-medium text-foreground mb-4'>
                Find me on:
              </p>
              <div className='space-y-3'>
                {socialLinks.map(
                  ({ icon: Icon, label, href, username, color }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel='noopener noreferrer'
                      className='flex items-center gap-3 p-3 rounded-xl border border-border group transition-all duration-200 hover:border-cyan/30 hover:bg-muted'
                    >
                      <div
                        className='w-9 h-9 rounded-lg flex items-center justify-center transition-colors'
                        style={{
                          background:
                            color === 'cyan'
                              ? 'hsl(var(--cyan) / 0.12)'
                              : color === 'purple'
                                ? 'hsl(var(--purple) / 0.12)'
                                : color === 'fiverr'
                                  ? 'hsl(var(--fiverr) / 0.12)'
                                  : color === 'upwork'
                                    ? 'hsl(var(--upwork) / 0.12)'
                                    : 'hsl(var(--muted))',
                        }}
                      >
                        <Icon
                          className='w-4 h-4'
                          style={{
                            color:
                              color === 'cyan'
                                ? 'hsl(var(--cyan))'
                                : color === 'purple'
                                  ? 'hsl(var(--purple))'
                                  : color === 'fiverr'
                                    ? 'hsl(var(--fiverr))'
                                    : 'hsl(var(--foreground))',
                          }}
                        />
                      </div>
                      <div className='flex-1'>
                        <p className='text-xs text-muted-foreground'>{label}</p>
                        <p className='text-sm font-medium text-foreground group-hover:text-cyan transition-colors'>
                          {username}
                        </p>
                      </div>
                    </a>
                  ),
                )}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div variants={itemVariants} className='lg:col-span-3'>
            <div
              className='p-8 rounded-2xl border'
              style={{
                background: 'hsl(var(--card))',
                borderColor: 'hsl(var(--border))',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              {state.succeeded ? (
                // ✅ Success state — driven by Formspree's real response
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className='flex flex-col items-center justify-center py-12 text-center gap-4'
                >
                  <div
                    className='w-16 h-16 rounded-full flex items-center justify-center'
                    style={{ background: 'hsl(var(--green-accent) / 0.15)' }}
                  >
                    <CheckCircle
                      className='w-8 h-8'
                      style={{ color: 'hsl(var(--green-accent))' }}
                    />
                  </div>
                  <h3 className='text-xl font-semibold text-foreground'>
                    Message Sent!
                  </h3>
                  <p className='text-muted-foreground text-sm'>
                    Thanks for reaching out. I'll get back to you within 24
                    hours.
                  </p>
                  <button onClick={resetForm} className='btn-outline mt-2'>
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className='space-y-5' noValidate>
                  <div className='grid sm:grid-cols-2 gap-5'>
                    <div>
                      <label className='block text-sm font-medium text-foreground mb-1.5'>
                        Name{' '}
                        <span style={{ color: 'hsl(var(--cyan))' }}>*</span>
                      </label>
                      <input
                        name='name'
                        value={form.name}
                        onChange={handleChange}
                        placeholder='John Doe'
                        className='contact-input'
                      />
                      {errors.name && (
                        <p
                          className='mt-1 text-xs flex items-center gap-1'
                          style={{ color: 'hsl(var(--destructive))' }}
                        >
                          <AlertCircle className='w-3 h-3' />
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className='block text-sm font-medium text-foreground mb-1.5'>
                        Email{' '}
                        <span style={{ color: 'hsl(var(--cyan))' }}>*</span>
                      </label>
                      <input
                        name='email'
                        type='email'
                        value={form.email}
                        onChange={handleChange}
                        placeholder='john@company.com'
                        className='contact-input'
                      />
                      {errors.email && (
                        <p
                          className='mt-1 text-xs flex items-center gap-1'
                          style={{ color: 'hsl(var(--destructive))' }}
                        >
                          <AlertCircle className='w-3 h-3' />
                          {errors.email}
                        </p>
                      )}
                      {/* Formspree server-side email error fallback */}
                      <ValidationError
                        prefix='Email'
                        field='email'
                        errors={state.errors}
                        className='mt-1 text-xs'
                        style={{ color: 'hsl(var(--destructive))' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-foreground mb-1.5'>
                      Subject{' '}
                      <span style={{ color: 'hsl(var(--cyan))' }}>*</span>
                    </label>
                    <input
                      name='subject'
                      value={form.subject}
                      onChange={handleChange}
                      placeholder='Project Collaboration'
                      className='contact-input'
                    />
                    {errors.subject && (
                      <p
                        className='mt-1 text-xs flex items-center gap-1'
                        style={{ color: 'hsl(var(--destructive))' }}
                      >
                        <AlertCircle className='w-3 h-3' />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className='block text-sm font-medium text-foreground mb-1.5'>
                      Message{' '}
                      <span style={{ color: 'hsl(var(--cyan))' }}>*</span>
                    </label>
                    <textarea
                      name='message'
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder='Tell me about your project, timeline, and budget...'
                      className='contact-input resize-none'
                    />
                    {errors.message && (
                      <p
                        className='mt-1 text-xs flex items-center gap-1'
                        style={{ color: 'hsl(var(--destructive))' }}
                      >
                        <AlertCircle className='w-3 h-3' />
                        {errors.message}
                      </p>
                    )}
                    <ValidationError
                      prefix='Message'
                      field='message'
                      errors={state.errors}
                      className='mt-1 text-xs'
                      style={{ color: 'hsl(var(--destructive))' }}
                    />
                  </div>

                  {/* Generic Formspree submission error */}
                  {state.errors && state.errors.length > 0 && (
                    <p
                      className='text-xs flex items-center gap-1'
                      style={{ color: 'hsl(var(--destructive))' }}
                    >
                      <AlertCircle className='w-3 h-3' />
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <button
                    type='submit'
                    disabled={state.submitting}
                    className='btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed'
                  >
                    {state.submitting ? (
                      <>
                        <span className='w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin' />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className='w-5 h-5' />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
