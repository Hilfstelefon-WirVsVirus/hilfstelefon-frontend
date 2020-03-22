<template>
  <div>
    <h2 class="listings-content__title">
      {{ $t('dashboard.open_requests')}}
    </h2>
    <IssueCard
      v-for="task in filteredTasks" :key="task.id"
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
import IssueCard from '@/components/IssueCard.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'AllTasks',
  components: { IssueCard },
  computed: {
    ...mapGetters([
      'filteredTasks',
    ]),
  },
};
</script>
