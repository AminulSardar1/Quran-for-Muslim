import { defineComponent } from "vue";
import MainLayout from "@/components/Layout/MainLayout";
import styles from "./Style.module.scss";

export default defineComponent({
    setup() {
        const adminInfo = {
            name: "MD Aminul Sardar",
            institution: "Chapainawabganj Polytechnic Institute",
            role1: "DaTa: Cyber Security Specialist",
            role2: "Web Developer & Student",
            phone: "+8801704407109",
            social: {
                facebook: "https://facebook.com/100071880593545",
                telegram: "https://t.me/Aminulsordar",
                whatsapp: "https://wa.me/8801704407109"
            }
        };

        return { adminInfo };
    },
    render() {
        return (
            <MainLayout>
                <div class={styles.adminContainer}>
                    <div class={styles.profileCard}>
                        <div class={styles.profileHeader}>
                            <div class={styles.avatarContainer}>
                                <div class={styles.avatar}>
                                    <font-awesome-icon icon="user" class={styles.avatarIcon} />
                                </div>
                            </div>
                        </div>
                        
                        <div class={styles.profileBody}>
                            <h2 class={styles.name}>{this.adminInfo.name}</h2>
                            
                            <div class={styles.infoItem}>
                                <font-awesome-icon icon="building" class={styles.infoIcon} />
                                <span>{this.adminInfo.institution}</span>
                            </div>
                            
                            <div class={styles.infoItem}>
                                <font-awesome-icon icon="shield-halved" class={styles.infoIcon} />
                                <span>{this.adminInfo.role1}</span>
                            </div>
                            
                            <div class={styles.infoItem}>
                                <font-awesome-icon icon="code" class={styles.infoIcon} />
                                <span>{this.adminInfo.role2}</span>
                            </div>
                            
                            <div class={styles.socialLinks}>
                                <a 
                                    href={this.adminInfo.social.facebook} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    class={[styles.socialBtn, styles.facebook]}
                                >
                                    <font-awesome-icon icon={["fab", "facebook-f"]} />
                                </a>
                                <a 
                                    href={this.adminInfo.social.whatsapp} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    class={[styles.socialBtn, styles.whatsapp]}
                                >
                                    <font-awesome-icon icon={["fab", "whatsapp"]} />
                                </a>
                                <a 
                                    href={this.adminInfo.social.telegram} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    class={[styles.socialBtn, styles.telegram]}
                                >
                                    <font-awesome-icon icon={["fab", "telegram"]} />
                                </a>
                            </div>
                            
                            <a 
                                href={`tel:${this.adminInfo.phone}`} 
                                class={styles.phoneBtn}
                            >
                                <font-awesome-icon icon="phone" class={styles.phoneIcon} />
                                <span>{this.adminInfo.phone}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </MainLayout>
        );
    }
});
