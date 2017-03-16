/*
    OpenERP, Open Source Management Solution
    This module copyright (C) 2014 Therp BV (<http://therp.nl>)
                          (C) 2013 Marcel van der Boom <marcel@hsdev.com>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation, either version 3 of the
    License, or (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

openerp.web_tree_audio = function(instance) {
    "use strict";
    var QWeb = instance.web.qweb;
    instance.web.list.Audio = instance.web.list.Column.extend({
        format: function (row_data, options) {
            var self = this;

            if (!row_data[self.id] || !row_data[self.id].value) {
                return '';
            }
            self.src = row_data[self.id].value;

            return QWeb.render('ListView.row.audio',
                               {widget: self});
        },
    });
    instance.web.list.columns.add('field.audio', 'instance.web.list.Audio');
};
