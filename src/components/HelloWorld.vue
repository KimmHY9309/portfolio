<template>
    <div class="body-wrapper row mt-5">
        <div class="body-profile col-sm-3">
            <div class="body-profile-image"></div>
            <div class="body-profile-list">
                <div class="py-3 fs-5 fw-light" style="color: #57606a">Kim Hakyoung</div>
                <button class="btn btn-light fol-btn" type="button">Follow</button>
                <div class="py-3">
                    <div>
                        <i class="far fa-user text-muted"></i><span class="fs-14">{{ dev }}</span> <i class="far fa-star text-muted"></i><span class="fs-14">{{ year }}</span>
                    </div>
                </div>
                <div>
                    <div>
                        <i class="fas fa-map-marker-alt text-muted"></i><span class="fs-14">&nbsp;{{ location }}</span>
                    </div>
                    <div>
                        <i class="far fa-envelope text-muted"></i><span class="fs-14">{{ email }}</span>
                    </div>
                </div>
                <div class="py-3 mt-3" style="border-top: 1px solid #dbdbdb">
                    <p class="fw-500 mb-2">Organizations</p>
                    <div class="d-flex">
                        <!-- <div class="organization-icon" v-for="ele in organization" v-bind:key="ele.key"></div> -->
                        <!-- <div class="organization-icon"><img src="../assets/ssa.jpg" alt="" class="w-100 h-100" style="border-radius: 10px" /></div> -->
                        <div class="organization-icon"><div class="ssafy"></div></div>
                        <div class="organization-icon"><div class="inha"></div></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hello col-sm-9">
            <div>
                <Tabs>
                    <TabItem>
                        <template #name> 📖 Overview </template>

                        <div class="first-tab"><Overview /></div>
                    </TabItem>
                    <TabItem>
                        <template #name> 💻 Project </template>

                        <div class="first-tab"><Project /></div>
                    </TabItem>
                    <TabItem>
                        <template #name> ❓ Q&amp;A </template>

                        <div class="first-tab"><Qna /></div>
                    </TabItem>
                </Tabs>
            </div>
        </div>
    </div>
</template>

<script>
import "../assets/font.css";
import { Tabs, TabItem } from "vue-material-tabs";
import Overview from "./TapOverview.vue";
import Project from "./TapProject.vue";
import Qna from "./TapQna.vue";

export default {
    name: "HelloWorld",
    props: {
        msg: String,
    },
    components: {
        Tabs,
        TabItem,
        Overview,
        Project,
        Qna,
    },
    data() {
        return {
            dev: " Junior developer",
            year: " Year 0",
            location: " Incheon, Korea ",
            email: " young126f@gmail.com",
            phone: "",
            organization: ["ssafy", "inhaUniv"],
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body-wrapper {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}
.body-profile-image {
    width: 100%;
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    background-image: url("../assets/ha.jpg");
    background-size: cover;
}
.body-profile-image:after {
    content: "";
    display: block;
    padding-bottom: 100%;
}
.fol-btn {
    height: 32px;
    font-size: 14px;
    width: 100%;
    border: 1px solid #dbdbdb;
    font-weight: 500;
    line-height: 20px;
}
.organization-icon {
    width: 32px;
    height: 32px;
    aspect-ratio: auto;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    margin-right: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.ssafy {
    background-size: cover;
    background-image: url("../assets/ssa.jpg");
    width: 80%;
    height: 80%;
}
.inha {
    background-size: cover;
    background-image: url("../assets/inha.jpg");
    width: 80%;
    height: 80%;
}
</style>
