<div class="onepage-step onepage-step-{{lengthArr orderStatuses}}">
    {{#unless orderStatuses}}
        <div class="aui-process-loading">
            <i class="aui-icon aui-icon-loading-large"></i>
        </div>
    {{/unless}}
    <hr class="onepage-step-ready-line"/>
    <hr class="onepage-step-done-line step0{{currentStatus}}"/>

    {{#each orderStatuses}}
    <span class="{{#compare currentIndex '<' currentStatus}}onepage-step-done{{/compare}}
                {{#compare currentIndex '>' currentStatus}}onepage-step-ready{{/compare}}
                {{#compare currentIndex '==' currentStatus}}onepage-step-current{{/compare}}
                {{#compare currentIndex '==' 0}}onepage-step-item-first{{/compare}}
                onepage-step-item">
        <i class="icon"></i>
        <br>
        <span class="onepage-step-state-wrap">
            <!-- 增加一层，实现行内元素居中 -->
            <span class="state">{{getI18NFromObj 'V2.Order.DetailTrade.status' name}}</span>
        </span>
    </span>
    {{/each}}
</div>
