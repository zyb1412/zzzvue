<template>
  <div class="stack-small" v-if="!isEditing">
    <div class="custom-checkbox">
      <input
        type="checkbox"
        class="checkbox"
        :id="id"
        :checked="isDone"
        @change="$emit('checkbox-changed')" />
      <label :for="id" class="checkbox-label">{{label}}</label>
    </div>
    <div class="btn-group">
      <el-button
    type="primary"
    class="btn"
    @click="toggleToItemEditForm">
    Edit
    <span class="visually-hidden">{{ label }}</span>
  </el-button>

      <button type="button" class="btn btn__danger" @click="deleteToDo">
        Delete <span class="visually-hidden">{{label}}</span>
      </button>
    </div>
  </div>
  <to-do-item-edit-form
  v-else
  :id="id"
  :label="label"
  @item-edited="itemEdited"
  @edit-cancelled="editCancelled">
</to-do-item-edit-form>


</template>


<script>
import ToDoItemEditForm from "./ToDoItemEditForm";


export default {
    components: {
  ToDoItemEditForm
},

  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean },
    id: { required: true, type: String },
  },
  data() {
    return {
      
      isEditing: false
    };
  },
  computed: {
  isDone() {
    return this.done;
  }
},

  methods: {
    deleteToDo() {
      this.$emit('item-deleted');
    },
    itemEdited(newLabel) {
  this.$emit('item-edited', newLabel);
  this.isEditing = false;
  this.focusOnEditButton();
},
editCancelled() {
  this.isEditing = false;
  this.focusOnEditButton();
},

toggleToItemEditForm() {
  console.log(this.$refs.editButton);
  this.isEditing = true;
},
focusOnEditButton() {
  this.$nextTick(() => {
    const editButtonRef = this.$refs.editButton;
    editButtonRef.focus();
  });
}



  }

};
</script>
