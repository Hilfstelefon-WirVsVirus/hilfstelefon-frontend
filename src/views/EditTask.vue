<template>
  <div>
    <h2 class="listings-content__title">
      {{ $t('dashboard.question_for_you')}}
    </h2>
    <EditIssueCard
      :taskId="task.id"
      :headline="task.category"
      :text="task.transcription"
      :city="task.city"
      :zip="task.zip"
      :state="task.status"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import EditIssueCard from '@/components/EditIssueCard.vue';

export default {
  name: 'EditTask',
  components: { EditIssueCard },
  computed: {
    ...mapGetters([
      'selectedTasks',
    ]),
    task() {
      return this.selectedTasks.find((task) => task.id === Number(this.$route.params.id));
    },
  },
};
</script>
