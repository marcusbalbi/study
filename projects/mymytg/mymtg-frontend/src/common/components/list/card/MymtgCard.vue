<template>
<div>
  <div class="cards-container">
    <div class="card" v-for="entry in data"  
        :class="{selected: isRowSelected(entry)}"
        @click="rowClicked(entry)">
      <b>{{ entry  }}</b>
    </div>
  </div>
  <div class="grid-bottom">
  <div>
    <slot name="actions" ></slot> 
  </div>
      <div class="grid-pagination">
    <slot name="pagination" ></slot> 
  </div>
  </div>
  </div>
</template>

<script type="text/javascript">
import pagination from 'src/common/components/list/pagination/Pagination'
export default {
  name: 'MymtgCard',
  props: {
    data: Array,
    columns: Array
  },
  components: {
    pagination
  },
  data: function () {
    var sortOrders = {}
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders,
      selectedRow: null
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    },
    rowClicked: function (row) {
      this.selectRow(row)
      this.$emit('selectedrow', this.selectedRow)
    },
    dbclick: function (row) {
      this.selectRow(row)
      this.$emit('dbclickrow', this.selectedRow)
    },
    isRowSelected: function (entry) {
      return this.selectedRow != null ? this.selectedRow[this.idColumn] === entry[this.idColumn] : false
    },
    getColumnText: function (column) {
      return column.text || column
    },
    getColumnValue: function (entry, column) {
      if (column && !column.index) {
        return entry[column]
      }
      let nameSpace = column.index.split('.')

      if (nameSpace.length === 1) {
        return entry[column.index]
      } else {
        let partialValue = entry
        for (let i = 0; i < nameSpace.length; i++) {
          partialValue = partialValue[nameSpace[i]]
        }
        return partialValue
      }
    },
    selectRow: function (row) {
      if (this.isRowSelected(row)) {
        this.selectedRow = null
      } else {
        this.selectedRow = row
      }
    }
  },
  computed: {
    idColumn: function () {
      var id = this.columns[0].index || this.columns[0]
      for (let column in this.columns) {
        id = column.id ? column.index : id
      }
      return id
    }
  },
  mounted: function () {
  }
}
</script>


<style type="text/css" scoped>


.card-container {
  display: flex;
}

.card {
  border: 1px solid green;
  display: inline-flex;
  padding: 10px;
  width: 200px;
  height: 150px;
  margin: 0.5em;
  box-shadow: 5px 5px 3px #888888;
}

.card:hover {
  background-color: #FCFFCD
}

.selected {
  background-color: #FFFD7C
}
.grid-bottom {
  margin-top: 30px;
  display: flex;
}
.grid-pagination {
   margin-left: auto;
}
</style>