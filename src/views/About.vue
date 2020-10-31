<template>
  <v-container fluid>
    <v-layout column>
      <v-card>
        <v-card-text>
          <v-flex class="mb-4">
            <v-avatar size="96" class="mr-4">
              <img src="@/assets/avatar.png" alt="Avatar" />
            </v-avatar>
            <v-btn @click="openAvatarPicker">Change Avatar</v-btn>
          </v-flex>
          <v-text-field v-model="form.firstName" label="Имя" readonly />
          <v-text-field v-model="form.lastName" label="Фамилия" readonly />
          <v-text-field
            v-model="form.contactEmail"
            label="Email Address"
            readonly
          />
          <v-textarea
            outlined
            label="Outlined textarea"
            v-model="form.aboutMe"
            readonly
          />
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  pageTitle: "My Profile",
  components: {},
  data() {
    return {
      form: {
        firstName: "Петр",
        lastName: "Смирнов",
        contactEmail: "okiniku@yahoo.com",
        aboutMe:
          "Занимаюсь разработкой frontend и мобильные приложение(на web технологиях), пишу на самом современном javascript.\nПредпочитаю феймворк Vue.js\nС удовольствием работаю над крупными и не очень проектами, отлично кооперируюсь с командой и очень стрессоустойчив.\nЕсть опыт работы над крупными проектами. Сайты и мобильные приложения на web технологиях. Хочется работать над не стандартными и интересными проектами.\nВ свободное время стараюсь постоянное повышать квалификацию.\nЕще есть небольшой опыт работы с UNIX системами.\nМой репозиторий (портфолио) на GitHub'е:\nhttps://github.com/Amenoniku \nТуда я выкладываю наиболее значимые мои опенсорс проекты."
      }
    };
  },
  methods: {
    openAvatarPicker() {
      this.showAvatarPicker = true;
    },
    selectAvatar(avatar) {
      this.form.avatar = avatar;
    }
  }
};
</script>
