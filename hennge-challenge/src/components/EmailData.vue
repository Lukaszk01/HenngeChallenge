emailOne  = {	
		id: 1,
        from: "aaa1@example.com",
        to: "zzzz.zzzz@example.com",
        subject: "[HR-8888] Noticed of official announcement",
        attachment: "",
        datetime: "2021-11-24T15:15:00+0200",
        body: "this is a fake body"
}
    

<template>
    <tr>
    <div class="email-data">
      <span>@{{ email.id }} on {{ email.from }}</span>
      <td>{{ email.subject }}</td>
      <td>{{ email.to }}</td>
      <td>{{ email.body }}</td>
      <td>{{ email.datetime }}</td>
    </div>
    </tr>

</template>

<script>
export default {
  props: {
    email: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.email-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.email-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>