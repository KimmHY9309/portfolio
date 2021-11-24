<template>
    <div class="nav_wrapper bg-24292f d-flex justify-content-between">
        <div class="d-flex">
            <div class="text-white me-3">
                <img src="../assets/hy_white.png" alt="" style="width: 30px; height: 30px" />
            </div>
            <div class="text-white me-3">
                <div class="input-group input-group-sm mb-3">
                    <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Search or jump to..."
                        style="background-color: #24292f; border-color: #57606a; width: 272px"
                    />
                </div>
            </div>
            <div class="text-white me-3 div-center"><a href="https://github.com/KimmHY9309" target="_blank">Github</a></div>
            <div class="text-white me-3 div-center"><a href="https://www.linkedin.com/in/hakyoung-kim-1b24b1215/" target="_blank">LinkedIn</a></div>
        </div>
        <div class="d-flex">
            <div class="text-white me-3" style="font-size: 23px"><i class="fab fa-facebook"></i></div>
            <div class="text-white" style="font-size: 23px"><i class="fab fa-twitter-square"></i></div>
        </div>
    </div>
</template>

<script>
import "../assets/font.css";

export default {};
</script>

<style>
.bg-24292f {
    background-color: #24292f;
    height: 62px;
    padding: 16px 32px;
}
.div-center {
    line-height: 30px;
    font-weight: 500;
}
</style>
