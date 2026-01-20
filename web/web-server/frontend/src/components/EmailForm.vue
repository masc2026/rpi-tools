<template>
  <div class="email-form-container">
    <form @submit.prevent="sendEmail" class="email-form">
      <div class="form-group">
        <input v-model="email.from" type="email" placeholder="From" required>
      </div>
      <div class="form-group">
        <input v-model="email.subject" type="text" placeholder="Subject" required>
      </div>
      <div class="form-group">
        <textarea v-model="email.body" placeholder="Body" required></textarea>
      </div>
      <button type="submit" class="submit-btn">Send Email</button>
    </form>
  </div>
</template>

<style scoped>
.email-form-container {
  margin: 0px auto;
  max-width: 500px;
  padding: 20px;
  background-color: #f8f9fa;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.email-form h1 {
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

.form-group input,
.form-group textarea {
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-group textarea {
  height: 180px;
  resize: none;
}

.submit-btn {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #0056b3;
}
</style>

<script>
export default {
  data() {
    return {
      email: {
        from: '',
        subject: '',
        body: ''
      }
    };
  },
  methods: {
    async sendEmail() {
      try {
        let response = await fetch('/api/send-mail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.email)
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || 'Email send failed');
        alert('Email sent successfully!');
        this.email = { from: '', subject: '', body: '' };
      } catch (error) {
        alert(error.message);
      }
    }
  }
};
</script>