[Previous imports remain unchanged...]

const Contact = () => {
  // Previous state declarations remain unchanged...

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        if (value.trim().length > 100) return 'Name must be less than 100 characters';
        if (!/^[a-zA-Z\s-']+$/.test(value.trim())) return 'Name contains invalid characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'Please enter a valid email';
        if (value.length > 254) return 'Email must be less than 254 characters';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        if (value.trim().length > 1000) return 'Message must be less than 1000 characters';
        // Check for potential XSS content
        if (/<[^>]*>/.test(value)) return 'Message contains invalid characters';
        return '';
      default:
        return '';
    }
  };

  const sanitizeInput = (value: string): string => {
    return value
      .replace(/[<>]/g, '') // Remove < and >
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({ name: true, email: true, message: true });
      return;
    }

    setFormStatus('submitting');
    setErrorMessage('');

    try {
      // Sanitize input data before sending
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        message: sanitizeInput(formData.message)
      };

      const { error } = await supabase
        .from('contact_messages')
        .insert([sanitizedData]);

      if (error) throw error;

      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      setTouched({});

      setTimeout(() => {
        setFormStatus('idle');
        setShowForm(false);
      }, 3000);

    } catch (error: any) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };

  // Rest of the component remains unchanged...
};

export default Contact;