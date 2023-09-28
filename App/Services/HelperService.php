<?php

namespace App\Services;

class HelperService extends \Core\Service {

    public static function buildForm($data) {
        $html = "<form v-scope=\"$data->formname\" autocomplete='off' onsubmit=\"javascript:return false;\">\n";
        foreach($data->fields as $field) {
            $html .= self::buildField($field);
        }
        $html .= "</form>";
        return $html;
    }

    private static function buildField($field) {
        $html = "<label>$field->label</label>\n";
        $html .= "<input is=\"my-input\"  class=\"form-input\" type=\"$field->type\" name=\"$field->name\" placeholder=\"$field->placeholder\" v-model=\"$field->vmodel\" $field->extra />\n";
        return $html;
    }

}
