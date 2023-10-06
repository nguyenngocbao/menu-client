const URL = '/store/';

const STRUCTURE = {
    id: {type:'text'},
    name : {type:'text'},
    phone : {type:'text'},
    address : {type:'text'},
    ward_id : {type:'selected'},
    district_id : {type:'selected'},
    city_id : {type:'selected'},
    store_type: {type:'selected'},
    wifi_pass : {type:'text'},
    email: {type:'text'},
    status: {type:'checkbox',default: true}
};
jQuery(document).ready(function () {



    $('#btn-add').on('click', function (e) {
        let form = $('#add-form');
        let data = getDataForm(STRUCTURE, form);


        $.ajax({
            method: 'POST',
            url: URL + 'update',
            dataType: 'json',
            data: data,
            success: function (response) {
                console.log(response)
                if (response.err === 1) {

                } else {


                }

            },
            error: function (error) {
                console.log(error);
            }
        });
    });
    //event
    $(document).on('change', '#city', function () {
        var formData = {
            id: $(this).val()
        };
        $.ajax({
            method: 'POST',
            url: URL + "get-district",
            dataType: 'json',
            data: formData,
            success: function (response) {
                if (response.err === 1) {

                } else {
                    $('#district').empty();
                    let html = '';
                    html += `<option value="0"> Please select district </option>`
                    for (const d of response.data) {
                        html += `<option value="${d.id}"> ${d.name} </option>`
                    }
                    $('#district').html(html);
                }
            },
            error: function (error) {
                console.log(error);
            }
        });
    });
    $(document).on('change', '#district', function () {
        var formData = {
            id: $(this).val()
        };
        $.ajax({
            method: 'POST',
            url: URL + "get-ward",
            dataType: 'json',
            data: formData,
            success: function (response) {
                if (response.err === 1) {

                } else {
                    $('#ward').empty();
                    let html = '';
                    html += `<option value="0"> Please select ward </option>`
                    for (const d of response.data) {
                        html += `<option value="${d.id}"> ${d.name} </option>`
                    }
                    $('#ward').html(html);

                }
            },
            error: function (error) {
                console.log(error);
            }
        });
    });




})

function clearForm(structure,form){

    for(let col in structure){
        let prop = structure[col];
        let name = col;
        switch (prop.type){
            case 'text':
            case 'date':
                $(form).find(`[name='${name}']`).val('');
                break;
            case 'image':
                $(form).find(`a[name='${name}']`).click();
                $(form).find(`img[name='${name}']`).attr('src',prop.default);
                break;
            case 'number':
                $(form).find(`[name='${name}']`).val(0);
                break;
            case 'selected':
                $(form).find(`[name='${name}']`).val(0).trigger('change');
                break;
            case 'checkbox':
                $(form).find(`[name='${name}']`).prop('checked',prop.default);
                break;
            case 'multiple-checkbox-text':
            case 'multiple-checkbox':
                values = [];
                $(form).find(`[name='${name}']:checked`).each(function() {
                    $(this).prop(false);
                });
                break;
        }
    }

}
function updateForm(structure,form,data){

    for(let col in structure){
        let prop = structure[col];
        let name = col;
        if (prop.updatedSkip){
            continue;
        }
        switch (prop.type){
            case 'text':
            case 'number':
                $(form).find(`[name='${name}']`).val(data[name]);
                break;
            case 'image':
                //$(form).find(`input[name='${name}']`).val(data[name]);
                $(form).find(`a[name='${name}']`).click();
                $(form).find(`img[name='${name}']`).attr('src',IMAGE_DOMAIN+data[name]);
                break;
            case 'selected':
                $(form).find(`[name='${name}']`).val(data[name]).trigger('change');
                break;
            case 'checkbox':
                $(form).find(`[name='${name}']`).prop('checked',1 == data[name]);
                break;
            case 'date':
                $(form).find(`[name='${name}']`).val(moment(data[name]).add(3, 'd').format('YYYY-MM-DD'));
                break;
            case 'multiple-checkbox-text':
                let values = data[name].trim().split(",");
                for (let value of values){
                    $(form).find(`[name='${name}'][value='${value}']`).prop('checked',true);
                };
                break;
            case 'multiple-checkbox':
                for (let value of data[name]){
                    $(form).find(`[name='${name}'][value='${value}']`).prop('checked',true);
                };
                break;
        }
    }

}
function getDataForm(structure,form){
    let result = {};
    for(let col in structure){
        result[col] = getInputParam(structure[col],col,form);
    }
    return result;
}

function getInputParam(properties,name,form){

    let  values = [];
    switch (properties.type){
        case 'text':
        case 'selected':
        case 'date':
        case 'number':
            return $(form).find(`[name='${name}']`).val();
        case 'checkbox':
            return $(form).find(`[name='${name}']`).is(':checked')? 1 : 0;
        case 'image':
            let file = $(form).find(`input[name='${name}']`)[0];
            if (file.files.length > 0){
                return file.files[0];
            }
            return '';
        case 'multiple-checkbox-text':
            values = [];
            $(form).find(`[name='${name}']:checked`).each(function() {
                values.push($(this).val());
            });
            return values.join(',');
        case 'multiple-checkbox':
            values = [];
            $(form).find(`[name='${name}']:checked`).each(function() {
                values.push($(this).val());
            });
            return values;
    }
}