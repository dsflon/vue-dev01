<template>
    <div>
        <br><hr><br>
        <!-- <textarea>{{ textarea }}</textarea> -->
        <div>
            <span>複数指定</span><br><br>
            <textarea v-model="textarea"></textarea>
            <p>{{ textarea }}</p>
        </div>

        <br><hr><br>

        <div>
            <span>チェックボックス</span><br><br>
            <label>
                <input type="checkbox" v-model="checked">
                <span>{{ checked }}</span>
            </label>
        </div>

        <br><hr><br>

        <div>
            <span>チェックボックス 複数</span><br><br>
            <label>
                <input type="checkbox" value="Red" v-model="colors">
                <span>Red</span>
            </label>
            <label>
                <input type="checkbox" value="Green" v-model="colors">
                <span>Green</span>
            </label>
            <label>
                <input type="checkbox" value="Blue" v-model="colors">
                <span>Blue</span>
                <pre>{{ $data.colors }}</pre>
            </label>
        </div>

        <br><hr><br>

        <div>
            <span>セレクトボックス</span><br><br>
            <select v-model="selected">
                <option disabled value="">Please select one</option>
                <option>Red</option>
                <option>Green</option>
                <option>Blue</option>
            </select>
            <p>{{ selected }}</p>
        </div>

        <br><hr><br>

        <div>
            <span>セレクトボックス 複数選択</span><br><br>
            <select v-model="selects" multiple>
                <option disabled value="">Please select one</option>
                <option>Red</option>
                <option>Green</option>
                <option>Blue</option>
            </select>
            <p>{{ selects }}</p>
        </div>

        <br><hr><br>
        <div>
            <span>.lazy</span><br><br>
            <input type="text" v-model.lazy="message">
            <p>{{ message }}</p>
        </div>

        <br><hr><br>
        <div>
            <span>.trim</span><br><br>
            <input type="text" v-model.trim="message">
            <p>{{ message }}</p>
        </div>

        <br><hr><br>
        <div>
            <span>.number</span><br><br>
            <input type="number" v-model.number="age">
            <p>{{ age + 10 }}</p>
        </div>

        <!-- <hr class="f-mb20"> -->
        <!-- <pre>{{ $data }}</pre> -->

    </div>
</template>

<script>
export default {
    data () {
        return {
            message: "",
            textarea: "",
            checked: false,
            colors: [],
            selected: "",
            selects: [],
            age: 0
        }
    }
}
</script>
