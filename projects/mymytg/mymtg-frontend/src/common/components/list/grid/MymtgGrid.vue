<template>
<div>
  <div class="grid-container">
    <table style="margin-bottom:5px" class="table table-bordered">
    <thead>
        <tr>
          <th v-for="column in columns"
            @click="sortBy(column)"
            :class="{actived: sortKey == column}">
            {{ getColumnText(column)}}
            <span class="arrow"
              :class="sortOrders[column] > 0 ? 'asc' : 'dsc'">
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="entry in data"
            :class="{selected: isRowSelected(entry)}"
            @click="rowClicked(entry)"
            @dblclick="dbclick(entry)">
            <td v-for="column in columns">
              {{getColumnValue(entry, column)}}
            </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="grid-bottom">
  <div>
    <slot name="actions" >
    </slot> 
  </div>
    <div class="grid-pagination">
      <slot name="pagination" >
        <pagination v-if="pagination" @change="changePage" :model="pagination" ></pagination>
      </slot> 
  </div>
  </div>
  </div>
</template>

<script type="text/javascript">
import pagination from 'src/common/components/list/pagination/Pagination'
import MymtgCrudActions from 'src/common/components/list/actions/MymtgCrudActions'
export default {
  name: 'MymtgGrid',
  props: {
    data: Array,
    columns: Array,
    pagination: {
      default: function () {
        return false
      }
    }
  },
  components: {
    pagination,
    MymtgCrudActions
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
      this.$emit('selectedRow', this.selectedRow)
    },
    dbclick: function (row) {
      this.selectRow(row)
      this.$emit('dbClickRow', this.selectedRow)
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
    },
    changePage: function (page) {
      this.$emit('changePage', page)
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
th {
  background-color: #439CDF;
  color: #fff;
  cursor: pointer;
}
th.actived {
  background-color: #308BCA;
}

th.actived .arrow {
  opacity: 1;
}
.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}

tr {
  cursor: pointer;
}

tr:hover {
  background-color: #FCFFCD
}
.grid-container {
  /*height: 405px;*/
}
.selected {
  background-color: #FFFD7C
}
.grid-bottom {
  display: flex;
}
.grid-pagination {
   margin-left: auto;
}
</style>