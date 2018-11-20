<?php

namespace Balbi\MyMtg\Common\Http\Requests;

class IndexRequest extends Request
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [];
    }

    public function getFilter()
    {
        return [
            'fields' => $this->getFields(),
            'include' => $this->getInclude(),
            'paginate' => $this->paginate(),
            'sort' => $this->getSortFields(),
            'filter' => $this->getFilterParams()
        ];
    }
    
    protected function paginate()
    {
        $pagination = $this->get('paginate', false);
        
        if(is_bool($pagination)) {
            return $pagination;
        }
        
        $paginationValues = (explode(',',$pagination));
        $result = [];
        foreach($paginationValues as $paginateItem) {
            $paginateItem = explode('=',$paginateItem);
            $result[$paginateItem[0]] = $paginateItem[1];
        }
        
        return $result;
        
        
    }

    protected function getFields()
    {
        $fields = $this->get('fields', ['*']);
        
        return is_array($fields) ? $fields : explode(',', $fields);
    }

    protected function getInclude()
    {
        $include = $this->get('include', []);
        
        return is_array($include) ? $include : explode(',', $include);
    }
    
    protected function getSortFields()
    {
        $fields = $this->get('sort', false);
        
        return is_array($fields) ? $fields : explode(',', $fields);
    }
    
    protected function getFilterParams()
    {
        $filterParams = $this->get('filter', []);
        
        if(empty($filterParams)) {
            return $filterParams;
        }
        
        $FilterValues = (explode(',',$filterParams));
        $result = [];
        foreach($FilterValues as $filterItem) {
          $filterItem = explode('=',$filterItem);
          $result[$filterItem[0]] = $filterItem[1];
        }

        return $result; 
    }
    
    
}
